import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createBlogSchema, getBlogSchema, updateBlogSchema } from "@ultra-vegito/blogging-website";

const router = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();


router.use('/*', async (c, next) => {
    const authHeader = c.req.header('authorization')

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        c.status(401);
        return c.json({
            message: 'Invalid token'
        })
    }

    const token = authHeader.split('Bearer ')[1]

    try {
        const response = await verify(token, c.env.JWT_SECRET);
        if (response.id) {
            c.set('userId', response.id.toString());
            await next();
        }
        else {
            c.status(403);
            return c.json({
                message: "Invalid token"
            })
        }
    }
    catch (err) {
        c.status(401);
        return c.json({
            message: "Invalid token",
            error: err
        })
    }

})

router.post('/', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const authorId = c.get('userId')

    if (!createBlogSchema.safeParse(body).success) {
        c.status(411);
        return c.json({
            message: 'invalid content'
        })
    }

    try {

        const newBlog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId
            }
        })

        return c.json({
            message: 'Blog created successfully',
            blogId: newBlog.id
        })
    }
    catch (error) {
        c.status(411);
        return c.json({
            message: 'Error',
            error
        })
    }

})

router.put('/', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const authorId = c.get('userId')

    if (!updateBlogSchema.safeParse(body).success) {
        c.status(411)
        return c.json({
            message: 'invalid content'
        })
    }

    const blogId = body.id;

    try {
        await prisma.blog.update({
            where: {
                id: blogId,
                authorId
            },
            data: {
                title: body.title,
                content: body.content,
                published: body.published
            }
        })

        return c.json({
            message: 'Blog updated Successfully'
        })
    }
    catch (error) {
        c.status(411)
        return c.json({
            message: 'unauthorized'
        })
    }
})

router.get('/bulk', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {

        const blogs = await prisma.blog.findMany({});

        return c.json({
            message: 'Found all blogs',
            blogs
        });
    }
    catch (err) {
        c.status(411);
        return c.json({
            message: 'Error',
            error: err
        })
    }

})

router.get('/:id', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const id = c.req.param('id');

    if (!getBlogSchema.safeParse(id).success) {
        c.status(411)
        return c.json({
            message: 'invalid blog ID'
        })
    }

    try {

        const blog = await prisma.blog.findFirst({
            where: {
                id
            }
        })

        if (blog) {
            return c.json({
                message: 'Blog Found',
                blog
            });
        }
        else {
            c.status(411);
            return c.json({
                message: 'blog does not exists'
            })
        }
    }
    catch (err) {
        c.status(411);
        return c.json({
            message: 'Error',
            error: err
        })
    }
})

export { router };
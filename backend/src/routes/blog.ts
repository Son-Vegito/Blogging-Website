import { Hono } from "hono";
import { verify } from "hono/jwt";
import { any, optional, z } from "zod";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const router = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();

router.get('/bulk', async(c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany({});
    
    return c.json({
        message: 'Found all blogs',
        blogs
    });

})

router.use('/*', async (c, next) => {
    const header = c.req.header('authorization')

    if (!header || !header.startsWith('Bearer ')) {
        c.status(401);
        return c.json({
            message: 'Invalid token'
        })
    }

    const token = header.split('Bearer ')[1]

    try {
        const response = await verify(token, c.env.JWT_SECRET);
        if (response.id) {
            c.set('userId', response.id.toString());
            await next();
        }
        else {
            c.status(401);
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

const createBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
})

router.post('/', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const authorId = c.get('userId')
    
    if (!createBlogSchema.safeParse(body).success) {
        c.status(403);
        return c.json({
            message: 'invalid content'
        })
    }
    
    const newBlog = await prisma.blog.create({
        data:{
            title: body.title,
            content: body.content,
            authorId
        }
    })
    
    return c.json({
        message: 'Blog created successfully',
        blogId: newBlog.id
    })
    
})

const updateBlogSchema = z.object({
    id: z.string().uuid(),
    title: z.string().optional(),
    content: z.string().optional(),
    published: z.boolean().optional()
})

router.put('/', async(c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const authorId = c.get('userId')
    
    if(!updateBlogSchema.safeParse(body).success){
        return c.json({
            message: 'invalid content'
        })
    }

    const blogId = body.id;
    
    try{
        await prisma.blog.update({
            where:{
                id: blogId,
                authorId
            },
            data:{
                title: body.title,
                content: body.content,
                published: body.published
            }
        })
        
        
        return c.json({
            message: 'Blog updated Successfully'
        })
    }
    catch(error){
        return c.json({
            message: 'unauthorized'
        })
    }
})

const getBlogSchema = z.string().uuid();

router.get('/:id', async(c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const id = c.req.param('id');
    
    if(!getBlogSchema.safeParse(id).success){
        return c.json({
            message: 'invalid blog ID'
        })
    }

    const blog = await prisma.blog.findFirst({
        where:{
            id
        }
    })

    if(blog){
        return c.json({
            message: 'Blog Found',
            blog
        });
    }
    else{
        return c.json({
            message: 'blog does not exists'
        })
    }

})

export { router };
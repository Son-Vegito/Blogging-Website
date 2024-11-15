import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import { signinSchema, signupSchema } from '@ultra-vegito/blogging-website';

const router = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

router.post('/signup', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()

    if (!signupSchema.safeParse(body).success) {
        c.status(411);
        return c.json({
            message: 'invalid input data'
        })
    }

    const existingUser = await prisma.user.findFirst({
        where: {
            email: body.email
        }
    })

    if (existingUser) {
        c.status(411);
        return c.json({
            message: 'User already exists'
        })
    }

    try {

        const newUser = await prisma.user.create({
            data: body
        })

        const token = await sign({
            id: newUser.id
        }, c.env.JWT_SECRET)

        return c.json({
            message: 'User Create Successfully',
            token: 'Bearer ' + token
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

router.post('/signin', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();

    if (!signinSchema.safeParse(body).success) {
        c.status(411);
        return c.json({
            message: 'invalid input data'
        })
    }
    try {

        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password
            }
        })

        if (!user) {
            c.status(403);
            return c.json({
                message: 'user not found'
            })
        }

        const token = await sign({
            id: user.id
        }, c.env.JWT_SECRET);

        return c.json({
            message: 'signin successful',
            token: 'Bearer ' + token
        });
    }
    catch (err) {
        c.status(403);
        return c.json({
            message: 'invalid',
            error: err
        })
    }
})

export { router }
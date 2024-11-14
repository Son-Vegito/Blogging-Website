import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import { z } from 'zod';

const router = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

const signupSchema = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string()
})

router.post('/signup', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()

    if (!signupSchema.safeParse(body).success) {
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
        return c.json({
            message: 'User already exists'
        })
    }

    const newUser = await prisma.user.create({
        data: body
    })

    const token = await sign({
        id: newUser.id
    }, c.env.JWT_SECRET)

    return c.json({
        message: 'User Create Successfully',
        token
    });

})

const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

router.post('/signin', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();

    if (!signinSchema.safeParse(body).success) {
        return c.json({
            message: 'invalid input data'
        })
    }

    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        }
    })

    if (!user) {
        return c.json({
            message: 'user not found'
        })
    }

    const token = await sign({
        id: user.id
    }, c.env.JWT_SECRET);

    return c.json({
        message: 'signin successful',
        token
    });

})

export { router }
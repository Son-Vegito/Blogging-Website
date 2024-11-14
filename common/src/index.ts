import { z } from "zod";

export const createBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
})

export const updateBlogSchema = z.object({
    id: z.string().uuid(),
    title: z.string().optional(),
    content: z.string().optional(),
    published: z.boolean().optional()
})

export const getBlogSchema = z.string().uuid();

export const signupSchema = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string()
})

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export type SignupSchema = z.infer<typeof signupSchema>
export type SigninSchema = z.infer<typeof signinSchema>
export type GetBlogType = z.infer<typeof getBlogSchema>
export type UpdateBlogType = z.infer<typeof updateBlogSchema>
export type CreateBlogType = z.infer<typeof createBlogSchema>
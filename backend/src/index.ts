import { Hono } from 'hono'
import { router as blogRouter } from './routes/blog'
import { router as userRouter } from './routes/user';

const app = new Hono();


app.get('/', (c) => {
  return c.json({
    message: 'hi there'
  })
})

app.route('/api/v1/blog', blogRouter)
app.route('/api/v1/user', userRouter)


export default app

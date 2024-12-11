import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  return c.text('Hello Hono!')
})
app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
})
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
postgresql://neondb_owner:mZ7Hs8aRQifw@ep-dawn-cloud-a5a6wasg.us-east-2.aws.neon.tech/neondb?sslmode=require






import Fastify from 'fastify'
import cors from '@fastify/cors'
import { productRoutes } from './routes/product'
import { messageRoutes } from './routes/message'

const app = Fastify()

app.register(cors)
app.register(productRoutes)
app.register(messageRoutes)

app.listen({ port: 3333 }, () => {
  console.log('HTTP Server running on http://localhost:3333')
})

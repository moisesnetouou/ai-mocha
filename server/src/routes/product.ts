import { FastifyInstance } from 'fastify'
import { prisma } from "../lib/prisma"

export async function productRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    return await prisma.product.findMany()
  })

  app.post('/', async (request, reply) => {
    const { name, price, category } = request.body as {
      name: string
      price: number
      category: string
    }

    const product = await prisma.product.create({
      data: { name, price, category },
    })

    return reply.status(201).send(product)
  })
}

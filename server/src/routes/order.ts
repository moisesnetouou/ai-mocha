import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";

export async function orderRoutes(fastify: FastifyInstance) {
  fastify.get("/orders", async (request, reply) => {
    const orders = await prisma.order.findMany({
      include: { customer: true },
    });
    return reply.send(orders);
  });

  fastify.post<
    { Body: { customerId: string; total: number } }
  >("/orders", async (request, reply) => {
    const { customerId, total } = request.body;
    const newOrder = await prisma.order.create({
      data: {
        customer_id: customerId,
        total,
      },
    });
    return reply.status(201).send(newOrder);
  });
}

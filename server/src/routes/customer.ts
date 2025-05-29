import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";

export async function customerRoutes(fastify: FastifyInstance) {
  fastify.get("/customers", async (request, reply) => {
    const customers = await prisma.customer.findMany();
    return reply.send(customers);
  });

  fastify.post<{ Body: { name: string; email: string } }>("/customers", async (request, reply) => {
    const { name, email } = request.body;
    const newCustomer = await prisma.customer.create({
      data: { name, email },
    });
    return reply.status(201).send(newCustomer);
  });
}

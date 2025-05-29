import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

interface MessageRequestBody {
  message: string;
}

interface MessageResponseBody {
  reply: string;
}

export async function messageRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: MessageRequestBody; Reply: MessageResponseBody }>(
    "/message",
    async (request: FastifyRequest<{ Body: MessageRequestBody }>, reply: FastifyReply) => {
      const { message } = request.body;

      // placeholder simulando IA
      const simulatedResponse = `You asked: "${message}". AI-MOCHA will respond soon!`;

      return reply.status(200).send({ reply: simulatedResponse });
    }
  );
}

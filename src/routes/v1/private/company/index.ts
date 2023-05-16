import { FastifyPluginAsync } from "fastify";
import { createCompanySchema } from "./schemas";
import { createCompanyController } from "../../../../controllers";

const company: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post(
    "/create",
    { schema: createCompanySchema },
    async (req: any, reply) => {
      try {
        const response = await createCompanyController(req.body);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );
};

export default company;

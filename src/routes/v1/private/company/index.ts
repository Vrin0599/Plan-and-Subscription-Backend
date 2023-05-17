import { FastifyPluginAsync } from "fastify";
import * as Schema from "./schemas";
import {
  createCompanyController,
  getCompanyController,
  updateCompanyController,
} from "../../../../controllers";

const company: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post(
    "/create",
    { schema: Schema.createCompanySchema },
    async (req: any, reply) => {
      try {
        const response = await createCompanyController(req.body);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.post(
    "/",
    { schema: Schema.getCompanySchema },
    async (req: any, reply) => {
      try {
        const response = await getCompanyController(req.body);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.put(
    "/",
    { schema: Schema.updateCompanySchema },
    async (req: any, reply) => {
      try {
        const response = await updateCompanyController(req.body);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );
};

export default company;

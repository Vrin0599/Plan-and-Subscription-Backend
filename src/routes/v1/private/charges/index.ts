import { FastifyPluginAsync } from "fastify";
import * as Schema from "./schemas";
import {
  createChargesController,
  getChargesController,
} from "../../../../controllers";

const charges: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post(
    "/create",
    { schema: Schema.createChargesSchema },
    async (req: any, reply) => {
      try {
        const response = await createChargesController(req.body, req.headers);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.post(
    "/",
    { schema: Schema.getChargesSchema },
    async (req: any, reply) => {
      try {
        const response = await getChargesController(req.body, req.headers);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );
};

export default charges;

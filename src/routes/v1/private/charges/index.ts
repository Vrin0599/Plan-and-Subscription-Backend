import { FastifyPluginAsync } from "fastify";
import * as Schema from "./schemas";
import {
  createChargesController,
  getChargesController,
  updateChargesController,
  deleteChargesController,
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

  fastify.put(
    "/",
    { schema: Schema.updateChargesSchema },
    async (req: any, reply) => {
      try {
        const response = await updateChargesController(req.body);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.delete(
    "/",
    { schema: Schema.deleteChargesSchema },
    async (req: any, reply) => {
      try {
        const response = await deleteChargesController(req.body);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );
};

export default charges;

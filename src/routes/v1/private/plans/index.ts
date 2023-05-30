import { FastifyPluginAsync } from "fastify";
import * as Schema from "./schemas";
import {
  createPlansController,
  getPlansController,
  updatePlansController,
  deletePlansController,
} from "../../../../controllers";

const plans: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post(
    "/create",
    { schema: Schema.createPlansSchema },
    async (req: any, reply) => {
      try {
        const response = await createPlansController(
          req.body,
          req.headers?.userDetails
        );
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.post(
    "/",
    { schema: Schema.getPlansSchema },
    async (req: any, reply) => {
      try {
        const response = await getPlansController(
          req.body,
          req.headers?.userDetails
        );
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.put(
    "/",
    { schema: Schema.updatePlansSchema },
    async (req: any, reply) => {
      try {
        const response = await updatePlansController(req.body);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.delete(
    "/",
    { schema: Schema.updatePlansSchema },
    async (req: any, reply) => {
      try {
        const response = await deletePlansController(req.body);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );
};

export default plans;
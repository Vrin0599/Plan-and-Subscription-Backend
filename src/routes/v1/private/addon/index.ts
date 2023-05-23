import { FastifyPluginAsync } from "fastify";
import * as Schema from "./schemas";
import { createAddOnController } from "../../../../controllers";

const addOn: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post(
    "/create",
    { schema: Schema.createAddOnSchema },
    async (req: any, reply) => {
      try {
        const response = await createAddOnController(
          req.body,
          req.headers?.userDetails
        );
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );
};

export default addOn;

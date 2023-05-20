import { FastifyPluginAsync } from "fastify";
import * as Schema from "./schemas";
import {
  createFeatureController,
  createFeatureGroupController,
} from "../../../../controllers";

const feature: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post(
    "/createFeature",
    { schema: Schema.createFeatureSchema },
    async (req: any, reply) => {
      try {
        const response = await createFeatureController(
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
    "/createFeatureGroup",
    { schema: Schema.createFeatureGroupSchema },
    async (req: any, reply) => {
      try {
        const response = await createFeatureGroupController(
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

export default feature;

import { FastifyPluginAsync } from "fastify";
import * as Schema from "./schemas";
import {
  createFeatureController,
  createFeatureGroupController,
  getFeaturesController,
  deleteFeatureController,
  deleteFeatureGroupController,
  updateFeatureController,
  updateFeatureGroupController,
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

  fastify.post(
    "/",
    { schema: Schema.getFeaturesSchema },
    async (req: any, reply) => {
      try {
        const response = await getFeaturesController(
          req.body,
          req.headers?.userDetails
        );

        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.delete(
    "/feature",
    { schema: Schema.deleteFeatureSchema },
    async (req: any, reply) => {
      try {
        const response = await deleteFeatureController(req.body);

        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.delete(
    "/featureGroup",
    { schema: Schema.deleteFeatureGroupSchema },
    async (req: any, reply) => {
      try {
        const response = await deleteFeatureGroupController(req.body);

        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.put(
    "/feature",
    { schema: Schema.updateFeatureSchema },
    async (req: any, reply) => {
      try {
        const response = await updateFeatureController(req.body);

        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );

  fastify.put(
    "/featureGroup",
    { schema: Schema.updateFeatureGroupSchema },
    async (req: any, reply) => {
      try {
        const response = await updateFeatureGroupController(req.body);
        reply.code(response.status).send(response);
      } catch (err) {
        reply.code(500).send(err);
      }
    }
  );
};

export default feature;

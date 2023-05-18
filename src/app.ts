import { join } from "path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";
import routesV1 from "./routes/v1";
import { globalIterface, giveMeStatusCodes, getUserProfile } from "./utils";

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

declare global {
  var status_codes: globalIterface;
}

global.status_codes = giveMeStatusCodes();

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  fastify.addHook("preHandler", async (request, reply) => {
    try {
      const token = request.headers?.authorization;

      if (token) {
        const userProfile = await getUserProfile(token);
        if (!userProfile?.data?.data) {
          return reply.code(500).send({
            statusCode: 500,
            type: "error",
            message: "token in In-valid",
          });
        }
        request.headers["userDetails"] = userProfile?.data?.data;
        return;
      }
      return;
    } catch (err) {
      return reply.code(500).send({
        statusCode: 500,
        type: "error",
        message: "token in In-valid",
      });
    }
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(routesV1);
};

export default app;
export { app, options };

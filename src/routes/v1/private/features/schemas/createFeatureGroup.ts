const createFeatureGroupBody: object = {
  type: "object",
  required: ["name", "features"],
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    is_active: {
      type: "boolean",
    },
    features: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

export const createFeatureGroupSchema: object = {
  tags: ["Feature Group"],
  description: "To create new feature group",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: createFeatureGroupBody,
};

const createFeatureBody: object = {
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string",
    },
    is_active: {
      type: "boolean",
    },
  },
};

export const createFeatureSchema: object = {
  tags: ["Features"],
  description: "To create new features",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: createFeatureBody,
};

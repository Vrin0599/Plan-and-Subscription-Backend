const updateFeatureBody: object = {
  type: "object",
  required: ["feature_id"],
  properties: {
    feature_id: { type: "string" },
  },
};

export const updateFeatureSchema: object = {
  tags: ["Features"],
  description: "To update features",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: updateFeatureBody,
};

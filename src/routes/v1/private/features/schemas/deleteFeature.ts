const deleteFeatureBody: object = {
  type: "object",
  required: ["feature_id"],
  properties: {
    feature_id: { type: "string" },
  },
};

export const deleteFeatureSchema: object = {
  tags: ["Features"],
  description: "To delete feature schema",
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
  },
  body: deleteFeatureBody,
};

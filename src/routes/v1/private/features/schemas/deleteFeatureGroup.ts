const deleteFeatureGroupBody: object = {
  type: "object",
  required: ["feature_group_id"],
  properties: {
    feature_group_id: { type: "string" },
  },
};

export const deleteFeatureGroupSchema: object = {
  tags: ["Features"],
  description: "To delete feature group schema",
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
  },
  body: deleteFeatureGroupBody,
};

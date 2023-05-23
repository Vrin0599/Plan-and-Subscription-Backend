const updateFeatureGroupBody: object = {
  type: "object",
  required: ["feature_group_id"],
  properties: {
    feature_group_id: { type: "string" },
  },
};

export const updateFeatureGroupSchema: object = {
  tags: ["Features"],
  description: "To update feature group",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: updateFeatureGroupBody,
};

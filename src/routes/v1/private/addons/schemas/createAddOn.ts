const createAddOnBody: object = {
  type: "object",
  required: ["name", "feature_id", "feature_group_id"],
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    feature_id: {
      type: "string",
    },
    feature_group_id: {
      type: "string",
    },
    is_active: {
      type: "string",
    },
  },
};

export const createAddOnSchema: object = {
  tags: ["Add On"],
  description: "To create add on",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: createAddOnBody,
};

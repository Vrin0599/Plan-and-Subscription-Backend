const createPlansBody: object = {
  type: "object",
  required: ["name", "pricing", "feature_group_id", "add_on_id", "charge_id"],
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    pricing: {
      type: "string",
    },
    feature_group_id: {
      type: "string",
    },
    add_on_id: {
      type: "string",
    },
    charge_id: {
      type: "string",
    },
    is_recomended: {
      type: "boolean",
    },
    is_metered_billing: {
      type: "boolean",
    },
    is_active: {
      type: "boolean",
    },
  },
};

export const createPlansSchema: object = {
  tags: ["Plans"],
  description: "To create a plan",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: {
        type: "string",
      },
    },
  },
  body: createPlansBody,
};

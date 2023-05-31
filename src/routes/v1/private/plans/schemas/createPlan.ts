const createPlanBody: object = {
  type: "object",
  required: ["name", "billing_period"],
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    price: {
      type: "object",
      nullable: false,
    },
    is_plan_public: {
      type: "boolean",
    },
    is_recomended: {
      type: "boolean",
    },
    is_metered_billing: {
      type: "boolean",
    },
    billing_period: {
      type: "string",
    },
    billing_cycles: {
      type: "string",
    },
    is_flat_fee: {
      type: "boolean",
    },
    is_per_user: {
      type: "boolean",
    },
    is_active: {
      type: "boolean",
    },
  },
};

export const createPlanSchema: object = {
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
  body: createPlanBody,
};

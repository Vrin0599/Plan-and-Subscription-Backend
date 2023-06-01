const createPlanBody: object = {
  type: "object",
  required: ["name", "billing_period", "price", "billing_cycles"],
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
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
    is_active: {
      type: "boolean",
    },
    billing_period: {
      type: "array",
      items: {
        type: "string",
      },
    },
    price: {
      type: "object",
      properties: {
        monthly: {
          type: "number",
        },
        yearly: {
          type: "number",
        },
      },
    },
    is_per_user: {
      type: "boolean",
    },
    is_flat_fee: {
      type: "boolean",
    },
    billing_cycles: {
      type: "string",
    },
    add_on: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          price: {
            type: "object",
            properties: {
              monthly: {
                type: "number",
              },
              yearly: {
                type: "number",
              },
            },
          },
          limit_count: {
            type: "number",
          },
        },
      },
    },
    charge: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          price: {
            type: "number",
          },
        },
      },
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

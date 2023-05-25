const getAddOnsBody: object = {
  type: "object",
  properties: {
    offset: {
      type: "number",
    },
    limit: {
      type: "number",
    },
  },
};

export const getAddOnSchema: object = {
  tags: ["AddOns"],
  description: "To get all the AddOns",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: getAddOnsBody,
  response: {
    200: {
      type: "object",
      properties: {
        status: {
          type: "number",
        },
        api_status: {
          type: "string",
        },
        message: {
          type: "string",
        },
        data: {
          type: "object",
          properties: {
            count: {
              type: "number",
            },
            rows: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "string",
                  },
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
                    type: "boolean",
                  },
                  created_at: {
                    type: "string",
                  },
                  created_by: {
                    type: "string",
                  },
                  updated_at: {
                    type: "string",
                  },
                  updated_by: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
    500: {
      type: "object",
      properties: {
        status: {
          type: "number",
        },
        api_status: {
          type: "string",
        },
        message: {
          type: "string",
        },
      },
    },
  },
};

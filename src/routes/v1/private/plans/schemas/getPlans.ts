const getPlansBody: object = {
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

export const getPlansSchema: object = {
  tags: ["Plans"],
  description: "To get all the Plans",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: getPlansBody,
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
                  add_on: {
                    type: "object",
                    properties: {
                      id: { type: "string" },
                      plans: {
                        type: "object",
                        properties: {
                          id: { type: "string" },
                          name: { type: "string" },
                          is_active: { type: "boolean" },
                        },
                      },
                    },
                  },
                  charge: {
                    type: "object",
                    properties: {
                      id: { type: "string" },
                      plans: {
                        type: "object",
                        properties: {
                          id: { type: "string" },
                          name: { type: "string" },
                          is_active: { type: "boolean" },
                        },
                      },
                    },
                  },
                  feature_group: {
                    type: "object",
                    properties: {
                      id: { type: "string" },
                      plans: {
                        type: "object",
                        properties: {
                          id: { type: "string" },
                          name: { type: "string" },
                          is_active: { type: "boolean" },
                        },
                      },
                    },
                  },
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
};

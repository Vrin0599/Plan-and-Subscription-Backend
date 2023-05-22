const getFeaturesBody: object = {
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

export const getFeaturesSchema: object = {
  tags: ["Features"],
  description: "To get all the features",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: getFeaturesBody,
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
                  feature_group_mapings: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                        feature: {
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
  },
};

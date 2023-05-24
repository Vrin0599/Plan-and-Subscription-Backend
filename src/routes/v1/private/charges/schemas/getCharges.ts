const getChargesBody: object = {
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

export const getChargesSchema: object = {
  tags: ["Charges"],
  description: "To get all the Charges",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: getChargesBody,
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
                  Charges_group_mapings: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                        Charges: {
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

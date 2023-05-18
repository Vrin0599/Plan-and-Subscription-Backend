const getCompanyBody: object = {
  type: "object",
  properties: {
    offset: { type: "number" },
    limit: { type: "number" },
  },
};

export const getCompanySchema: object = {
  tags: ["Company"],
  description: "To get list of company",
  headers: {
    type: "object",
    properties: {
      authorization: {
        type: "string",
      },
    },
  },
  body: getCompanyBody,
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
                  website: {
                    type: "string",
                  },
                  logo: {
                    type: "string",
                  },
                  addrerss: {
                    type: "object",
                    properties: {
                      address_line: {
                        type: "string",
                      },
                      city: {
                        type: "string",
                      },
                      state: {
                        type: "string",
                      },
                      country: {
                        type: "string",
                      },
                      pincode: {
                        type: "number",
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

const updateCompanyBody: object = {
  type: "object",
  required: ["company_id"],
  properties: {
    company_id: {
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
};

export const updateCompanySchema: object = {
  tags: ["Company"],
  description: "To update Company Schema",
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
  },
  body: updateCompanyBody,
};

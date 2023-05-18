const createCompanyBody: object = {
  type: "object",
  required: ["name", "address_line", "city", "state", "country", "pincode"],
  properties: {
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

export const createCompanySchema: object = {
  tags: ["Company"],
  description: "To create new company",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: createCompanyBody,
};

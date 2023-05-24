const createChargesBody: object = {
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    is_active: {
      type: "string",
    },
  },
};

export const createChargesSchema: object = {
  tags: ["Add On"],
  description: "To create charges",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: createChargesBody,
};

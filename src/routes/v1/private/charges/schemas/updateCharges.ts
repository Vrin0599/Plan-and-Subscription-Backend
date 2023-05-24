const updateChargesBody: object = {
  type: "object",
  required: ["charge_id"],
  properties: {
    charge_id: {
      type: "string",
    },
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
};

export const updateChargesSchema: object = {
  tags: ["Charges"],
  descripion: "To update charges",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: updateChargesBody,
};

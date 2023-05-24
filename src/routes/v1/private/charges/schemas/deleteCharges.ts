const deleteChargesBody: object = {
  type: "object",
  required: ["charge_id"],
  properties: {
    charges_id: { type: "string" },
  },
};

export const deleteChargesSchema: object = {
  tags: ["Charges"],
  description: "To delete Charges schema",
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
  },
  body: deleteChargesBody,
};

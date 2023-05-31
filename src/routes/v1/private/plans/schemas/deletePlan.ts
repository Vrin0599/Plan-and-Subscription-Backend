const deletePlanBody: object = {
  type: "object",
  required: ["plans_id"],
  properties: {
    plans_id: { type: "string" },
  },
};

export const deletePlanSchema: object = {
  tags: ["Plans"],
  description: "To delete Plans schema",
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
  },
  body: deletePlanBody,
};

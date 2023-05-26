const deletePlansBody: object = {
  type: "object",
  required: ["plans_id"],
  properties: {
    plans_id: { type: "string" },
  },
};

export const deletePlansSchema: object = {
  tags: ["Plans"],
  description: "To delete Plans schema",
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
  },
  body: deletePlansBody,
};

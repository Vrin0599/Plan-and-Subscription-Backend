const updatePlansBody: object = {
  type: "object",
  required: ["plan_id"],
  properties: {
    plan_id: { type: "string" },
  },
};

export const updatePlansSchema: object = {
  tags: ["Plans"],
  description: "To update plans",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: updatePlansBody,
};

const updatePlanBody: object = {
  type: "object",
  required: ["plan_id"],
  properties: {
    plan_id: { type: "string" },
  },
};

export const updatePlanSchema: object = {
  tags: ["Plans"],
  description: "To update plans",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: updatePlanBody,
};

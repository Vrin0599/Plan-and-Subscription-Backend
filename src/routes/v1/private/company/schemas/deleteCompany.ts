const deleteCompanyBody: object = {
  type: "object",
  required: ["company_id"],
  properties: {
    company_id: { type: "string" },
  },
};

export const deleteCompanySchema: object = {
  tags: ["Company"],
  description: "To delete company schema",
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
  },
  body: deleteCompanyBody,
};

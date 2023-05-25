const deleteAddOnBody: object = {
  type: "object",
  properties: {
    addon_id: {
      type: "string",
    },
  },
};

export const deleteAddOnSchema: object = {
  tags: ["Add On"],
  description: "To delete add on",
  header: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: {
        type: "string",
      },
    },
  },
  body: deleteAddOnBody,
};

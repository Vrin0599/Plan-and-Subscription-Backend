const updateAddOnBody: object = {
  type: "object",
  required: ["addon_id"],
  properties: {
    addon_id: {
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

export const updateAddOnSchema: object = {
  tags: ["Add On"],
  descripion: "To update add on",
  headers: {
    type: "object",
    required: ["authorization"],
    properties: {
      authorization: { type: "string" },
    },
  },
  body: updateAddOnBody,
};

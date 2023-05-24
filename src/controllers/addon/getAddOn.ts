import { Op } from "sequelize";
import { ResponseType } from "../../utils";
import { add_on } from "../../models/add_on";

interface Payload {
  offset?: number;
  limit?: number;
  search?: string;
}

export const getAddOnController = (payload: Payload) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const offset = payload.offset ? payload.offset : 0;
      const limit = payload.limit ? payload.limit : 0;
      const search = payload.search ? payload.search : "";

      const query = await add_on.findAndCountAll({
        offset,
        limit,
        where: {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        },
      });
      resolve({
        ...globalThis.status_codes?.success,
        data: query,
        message: "Add On details fetched successfully!",
      });
    } catch (err) {
      console.log(err);
      return reject({
        ...globalThis.status_codes?.error,
        message: "Cannot fetch Add On details, try again!",
      });
    }
  });
};

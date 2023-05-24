import { Op } from "sequelize";
import { ResponseType, UserDetails } from "../../utils";
import { charge } from "../../models/charge";

interface GetChargesPayload {
  offset?: number;
  limit?: number;
  search?: string;
}

export const getChargesController = async (
  payload: GetChargesPayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const offset = payload.offset ? payload.offset : 0;
      const limit = payload.limit ? payload.limit : 10;
      const search = payload.search ? payload.search : "";

      const query = await charge.findAndCountAll({
        offset,
        limit,
        where: {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        },
        distinct: true,
      });

      resolve({
        ...globalThis.status_codes.success,
        message: "Charges details fetched successfully!",
        data: query,
      });
    } catch (err) {
      reject({
        ...globalThis.status_codes?.error,
        message: "Cannot fetch charges, try again!",
      });
    }
  });
};

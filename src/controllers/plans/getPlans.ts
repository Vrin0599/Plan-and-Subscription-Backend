import { Op } from "sequelize";
import { ResponseType, UserDetails } from "../../utils";
import { plan } from "../../models/plan";
import { add_on } from "../../models/add_on";
import { charge } from "../../models/charge";
import { feature_group } from "../../models/feature_group";

interface GetPlansPayload {
  offset?: number;
  limit?: number;
  search?: string;
}

export const getPlansController = (
  payload: GetPlansPayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const offset = payload.offset ? payload.offset : 0;
      const limit = payload.limit ? payload.limit : 0;
      const search = payload.search ? payload.search : "";

      const query = await plan.findAndCountAll({
        offset,
        limit,
        include: [
          {
            model: feature_group,
            as: "feature_group",
            attributes: ["id"],
          },
          {
            model: add_on,
            as: "add_on",
            attributes: ["id"],
          },
          {
            model: charge,
            as: "charge",
            attributes: ["id"],
          },
        ],
        where: {
          created_by: user.user_profile_id,
          name: {
            [Op.iLike]: `%${search}%`,
          },
        },
        distinct: true,
      });

      resolve({
        ...globalThis.status_codes?.success,
        data: query,
        message: "Plans details fetched successfully!",
      });
    } catch (err) {
      return reject({
        ...globalThis.status_codes?.error,
        message: "Cannot fetch Plans details, try again!",
      });
    }
  });
};

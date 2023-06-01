import { Op } from "sequelize";
import { ResponseType, UserDetails } from "../../utils";
import { plan } from "../../models/plan";
import { plan_add_on_mapping } from "../../models/plan_add_on_mapping";
import { plan_charge_mapping } from "../../models/plan_charge_mapping";
import { add_on } from "../../models/add_on";
import { charge } from "../../models/charge";

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
            attributes: ["id", "price", "limit_count"],
            as: "plan_add_on_mappings",
            model: plan_add_on_mapping,
            include: [
              {
                attributes: ["id", "name"],
                as: "add_on",
                model: add_on,
              },
            ],
          },
          {
            attributes: ["id", "price"],
            as: "plan_charge_mappings",
            model: plan_charge_mapping,
            include: [
              {
                attributes: ["id", "name"],
                as: "charge",
                model: charge,
              },
            ],
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

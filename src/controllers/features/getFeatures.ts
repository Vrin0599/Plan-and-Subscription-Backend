import { Op } from "sequelize";
import { feature } from "../../models/feature";
import { feature_group } from "../../models/feature_group";
import { feature_group_maping } from "../../models/feature_group_maping";
import { ResponseType, UserDetails } from "../../utils";

interface GetFeaturesPayload {
  offset?: number;
  limit?: number;
  search?: string;
}

export const getFeaturesController = async (
  payload: GetFeaturesPayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const offset = payload.offset ? payload.offset : 0;
      const limit = payload.limit ? payload.limit : 10;
      const search = payload.search ? payload.search : "";

      const query = await feature_group.findAndCountAll({
        offset,
        limit,
        attributes: [
          "id",
          "name",
          "description",
          "is_active",
          "created_at",
          "created_by",
          "updated_at",
          "updated_by",
        ],
        include: [
          {
            model: feature_group_maping,
            as: "feature_group_mapings",
            attributes: ["id"],
            include: [
              {
                model: feature,
                as: "feature",
                attributes: ["id", "name", "is_active"],
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
        ...globalThis.status_codes.success,
        message: "Feature details fetched successfully!",
        data: query,
      });
    } catch (err) {
      reject({
        ...globalThis.status_codes?.error,
        message: "Cannot fetch feature details, try again!",
      });
    }
  });
};

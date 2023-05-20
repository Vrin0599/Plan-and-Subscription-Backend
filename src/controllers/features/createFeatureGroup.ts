import { feature_group } from "../../models/feature_group";
import { feature_group_maping } from "../../models/feature_group_maping";
import { ResponseType, UserDetails } from "../../utils";

interface CreateFeaturePayload {
  name: string;
  description?: string;
  features: Array<string>;
  is_active?: boolean;
}

export const createFeatureGroupController = async (
  payload: CreateFeaturePayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      let createFeatureGroup = await feature_group.create({
        name: payload.name,
        description: payload.description,
        is_active: payload.is_active,
        created_by: user.user_profile_id,
        updated_by: user.user_profile_id,
      });
      createFeatureGroup = createFeatureGroup.toJSON();

      const mapFeatures = payload.features.map((feature) => {
        return {
          feature_id: feature,
          feature_group_id: createFeatureGroup.id,
        };
      });
      await feature_group_maping.bulkCreate(mapFeatures);

      resolve({
        ...globalThis.status_codes.success,
        message: "Feature group created successfully.",
        data: createFeatureGroup,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Feature group not created, try again!",
      });
    }
  });
};

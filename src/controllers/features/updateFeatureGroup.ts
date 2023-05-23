import { feature_group } from "../../models/feature_group";
import { ResponseType } from "../../utils";

interface UpdateFeaturePayload {
  feature_group_id: string;
  name?: string;
  description?: string;
  is_active: boolean;
}

export const updateFeatureGroupController = async (
  payload: UpdateFeaturePayload
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const query = await feature_group.update(
        {
          name: payload.name,
          description: payload.description,
          is_active: payload.is_active,
        },
        {
          where: {
            id: payload.feature_group_id,
          },
          returning: true,
        }
      );

      resolve({
        ...globalThis.status_codes.success,
        message: "Feature group updated successfully!",
        data: query,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Cannot update feature group, try again!",
      });
    }
  });
};

import { ResponseType } from "../../utils";
import { feature } from "../../models/feature";

interface UpdateFeaturePayload {
  feature_id: string;
  name?: string;
  is_active: boolean;
}

export const updateFeatureController = async (
  payload: UpdateFeaturePayload
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const query = await feature.update(
        {
          name: payload.name,
          is_active: payload.is_active,
        },
        {
          where: {
            id: payload.feature_id,
          },
          returning: true,
        }
      );

      resolve({
        ...globalThis.status_codes.success,
        message: "Features updated successfully!",
        data: query,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Cannot update features, try again!",
      });
    }
  });
};

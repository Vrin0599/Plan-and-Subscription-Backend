import { feature } from "../../models/feature";
import { feature_group_maping } from "../../models/feature_group_maping";
import { ResponseType } from "../../utils";

interface DeleteFeaturePayload {
  feature_id?: string;
}

export const deleteFeatureController = async (
  payload: DeleteFeaturePayload
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      await feature_group_maping.destroy({
        where: {
          feature_id: payload.feature_id,
        },
      });

      await feature.destroy({
        where: {
          id: payload.feature_id,
        },
      });

      resolve({
        ...globalThis.status_codes.success,
        data: {},
        message: "Feature deleted sucessfully!",
      });
    } catch (err) {
      reject({
        ...globalThis.status_codes.error,
        message: "Cannot delete feature, try again!",
      });
    }
  });
};

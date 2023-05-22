import { feature_group } from "../../models/feature_group";
import { feature_group_maping } from "../../models/feature_group_maping";
import { ResponseType } from "../../utils";

interface DeleteFeatureGroupPayload {
  feature_group_id?: string;
}

export const deleteFeatureGroupController = async (
  payload: DeleteFeatureGroupPayload
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      await feature_group_maping.destroy({
        where: {
          feature_group_id: payload.feature_group_id,
        },
      });

      await feature_group.destroy({
        where: {
          id: payload.feature_group_id,
        },
      });

      resolve({
        ...globalThis.status_codes.success,
        data: {},
        message: "Feature group deleted sucessfully!",
      });
    } catch (err) {
      reject({
        ...globalThis.status_codes.error,
        message: "Cannot delete feature group, try again!",
      });
    }
  });
};

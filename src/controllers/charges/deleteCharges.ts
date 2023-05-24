import { charge } from "../../models/charge";
import { ResponseType } from "../../utils";

interface DeleteFeaturePayload {
  charge_id?: string;
}

export const deleteChargesController = async (
  payload: DeleteFeaturePayload
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      await charge.destroy({
        where: {
          id: payload.charge_id,
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

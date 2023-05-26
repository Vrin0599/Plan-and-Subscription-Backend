import { plan } from "../../models/plan";
import { ResponseType } from "../../utils";

interface DeletePlansPayload {
  plan_id?: string;
}

export const deletePlansController = async (payload: DeletePlansPayload) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      await plan.destroy({
        where: {
          id: payload.plan_id,
        },
      });

      resolve({
        ...globalThis.status_codes.success,
        data: {},
        message: "Plans deleted sucessfully!",
      });
    } catch (err) {
      reject({
        ...globalThis.status_codes.error,
        message: "Cannot delete Plans, try again!",
      });
    }
  });
};

import { plan } from "../../models/plan";
import { ResponseType } from "../../utils";

interface UpdatePlansPayload {
  plan_id: string;
  name?: string;
  is_active: boolean;
}

export const updatePlansController = async (payload: UpdatePlansPayload) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const query = await plan.update(
        {
          name: payload.name,
          is_active: payload.is_active,
        },
        {
          where: {
            id: payload.plan_id,
          },
          returning: true,
        }
      );

      resolve({
        ...globalThis.status_codes.success,
        message: "Plans updated successfully!",
        data: query,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Cannot update plans, try again!",
      });
    }
  });
};

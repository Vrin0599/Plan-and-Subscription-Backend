import { plan } from "../../models/plan";
import { ResponseType, UserDetails } from "../../utils";

interface CreatePlansPayload {
  name: string;
  description: string;

  is_recomended?: boolean;
  is_metered_billing?: boolean;
  is_active?: boolean;
}

export const createPlansController = async (
  payload: CreatePlansPayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      let createPlans = await plan.create({
        name: payload.name,
        description: payload.description,
        is_recomended: payload.is_recomended,
        is_metered_billing: payload.is_metered_billing,
        is_active: payload.is_active,
        created_by: user.user_profile_id,
        updated_by: user.user_profile_id,
      });

      resolve({
        ...globalThis.status_codes.success,
        message: "Plans created successfully.",
        data: createPlans,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Plans not created, try again!",
      });
    }
  });
};

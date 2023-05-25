import { plan } from "../../models/plan";
import { ResponseType, UserDetails } from "../../utils";

interface CreatePlansPayload {
  name: string;
  description: string;
  pricing: string;
  feature_group_id: string;
  add_on_id: string;
  charge_id: string;
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
        pricing: payload.pricing,
        feature_group_id: payload.feature_group_id,
        add_on_id: payload.add_on_id,
        charge_id: payload.charge_id,
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

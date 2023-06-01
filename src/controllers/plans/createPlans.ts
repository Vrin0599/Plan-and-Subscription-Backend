import { plan } from "../../models/plan";
import { plan_add_on_mapping } from "../../models/plan_add_on_mapping";
import { plan_charge_mapping } from "../../models/plan_charge_mapping";
import { ResponseType, UserDetails } from "../../utils";

interface PricePayloadData {
  monthly: number;
  yearly: number;
}

interface AddOnPayloadData {
  id: string;
  price: PricePayloadData;
  limit_count: number;
}

interface ChargePayloadData {
  id: string;
  price: PricePayloadData;
}

interface CreatePlansPayload {
  name: string;
  description: string;
  is_plan_public?: boolean;
  is_recomended?: boolean;
  is_metered_billing?: boolean;
  is_active?: boolean;
  billing_period: Array<string>;
  price: PricePayloadData;
  is_per_user?: boolean;
  is_flat_fee?: boolean;
  billing_cycles: string;
  add_on?: Array<AddOnPayloadData>;
  charge?: Array<ChargePayloadData>;
}

export const createPlansController = async (
  payload: CreatePlansPayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      let createPlan: any = await plan.create({
        name: payload.name,
        description: payload.description,
        is_plan_public: payload.is_plan_public,
        is_recomended: payload.is_recomended,
        is_metered_billing: payload.is_metered_billing,
        is_active: payload.is_active,
        billing_period: payload.billing_period,
        price: payload.price,
        is_per_user: payload.is_per_user,
        is_flat_fee: payload.is_flat_fee,
        billing_cycles: payload.billing_cycles,
        created_by: user.user_profile_id,
        updated_by: user.user_profile_id,
      });
      createPlan = createPlan.toJSON();

      if (createPlan.id) {
        const mapping_data_plan_addon: any = payload.add_on?.map((add_on) => {
          return {
            plan_id: createPlan.id,
            add_on_id: add_on.id,
            price: add_on.price,
            limit_count: add_on.limit_count,
            created_by: user.user_profile_id,
            updated_by: user.user_profile_id,
          };
        });
        await plan_add_on_mapping.bulkCreate(mapping_data_plan_addon);

        const mapping_data_plan_charge: any = payload.charge?.map((charge) => {
          return {
            plan_id: createPlan.id,
            charge_id: charge.id,
            price: charge.price,
          };
        });
        await plan_charge_mapping.bulkCreate(mapping_data_plan_charge);
      }

      resolve({
        ...globalThis.status_codes.success,
        message: "Plans created successfully.",
        data: createPlan,
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

import { add_on } from "../../models/add_on";
import { ResponseType, UserDetails } from "../../utils";

interface CreateAddOnPayload {
  name: string;
  description: string;
  feature_id: string;
  feature_group_id: string;
}

export const createAddOnController = async (
  payload: CreateAddOnPayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      let createAddOn = await add_on.create({
        name: payload.name,
        description: payload.description,
        feature_id: payload.feature_id,
        feature_group_id: payload.feature_group_id,
        is_active: true,
        created_by: user.user_profile_id,
        updated_by: user.user_profile_id,
      });

      resolve({
        ...globalThis.status_codes.success,
        message: "Add on created successfully.",
        data: createAddOn,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Add on not created, try again!",
      });
    }
  });
};

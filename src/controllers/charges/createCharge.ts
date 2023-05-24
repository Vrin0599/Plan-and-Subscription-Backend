import { charge } from "../../models/charge";
import { ResponseType, UserDetails } from "../../utils";

interface CreateChargesPayload {
  name: string;
  description: string;
  is_active: boolean;
}

export const createChargesController = async (
  payload: CreateChargesPayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      let createCharges = await charge.create({
        name: payload.name,
        description: payload.description,
        is_active: payload.is_active,
        created_by: user.user_profile_id,
        updated_by: user.user_profile_id,
      });

      resolve({
        ...globalThis.status_codes.success,
        message: "Charges created successfully.",
        data: createCharges,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Charges not created, try again!",
      });
    }
  });
};

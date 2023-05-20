import { feature } from "../../models/feature";
import { ResponseType, UserDetails } from "../../utils";

interface CreateFeaturePayload {
  name: string;
  is_active?: boolean;
}

export const createFeatureController = async (
  payload: CreateFeaturePayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      let createFeatures = await feature.create({
        name: payload.name,
        is_active: payload.is_active,
        created_by: user.user_profile_id,
        updated_by: user.user_profile_id,
      });

      resolve({
        ...globalThis.status_codes.success,
        message: "Feature added successfully.",
        data: createFeatures,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Feature not added, try again!",
      });
    }
  });
};

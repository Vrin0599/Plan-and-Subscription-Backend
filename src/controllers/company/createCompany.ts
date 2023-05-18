import { addrerss } from "../../models/addrerss";
import { company } from "../../models/company";

import { ResponseType, UserDetails } from "../../utils";

interface CreateCompanyPayload {
  name: string;
  website?: string;
  logo?: string;
  address_line: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
}

export const createCompanyController = async (
  payload: CreateCompanyPayload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      let createAddress = await addrerss.create({
        address_line: payload.address_line,
        city: payload.city,
        state: payload.state,
        country: payload.country,
        pincode: payload.pincode,
        is_active: true,
        created_by: user.user_profile_id,
        updated_by: user.user_profile_id,
      });
      createAddress = createAddress.toJSON();

      const createCompany = await company.create({
        name: payload.name,
        website: payload.website,
        logo: payload.logo,
        address_id: createAddress.id,
        is_active: true,
        created_by: user.user_profile_id,
        updated_by: user.user_profile_id,
      });
      resolve({
        ...globalThis.status_codes.success,
        message: "Company created successfully.",
        data: createCompany,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Company not created, try again!",
      });
    }
  });
};

// import { addrerss } from "../../models/addrerss";
import { addrerss } from "../../models/addrerss";
import { company } from "../../models/company";
import { ResponseType, UserDetails } from "../../utils";

interface Payload {
  company_id: string;
  name?: string;
  website?: string;
  logo?: string;
  address_id: string;
  address_line?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: number;
}

export const updateCompanyController = async (
  payload: Payload,
  user: UserDetails
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const response = await company.update(
        {
          name: payload.name,
          website: payload.website,
          logo: payload.logo,
          updated_at: new Date(),
          updated_by: user.user_profile_id,
        },
        {
          where: {
            id: payload.company_id,
          },
          returning: true,
        }
      );

      await addrerss.update(
        {
          address_line: payload.address_line,
          city: payload.city,
          state: payload.state,
          country: payload.country,
          pincode: payload.pincode,
          updated_at: new Date(),
          updated_by: user.user_profile_id,
        },
        {
          where: {
            id: payload.address_id,
          },
        }
      );
      resolve({
        ...globalThis.status_codes.success,
        data: response,
        message: "Company deatils updated sucessfully!",
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes.error,
        message: "Cannot update company deatils, try agian!",
      });
    }
  });
};

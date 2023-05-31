import { address } from "../../models/address";
import { company } from "../../models/company";
import { ResponseType } from "../../utils";

interface Payload {
  company_id: string;
  address_id: string;
}

export const deleteCompanyControler = async (payload: Payload) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      await company.destroy({
        where: {
          id: payload.company_id,
        },
      });

      await address.destroy({
        where: {
          id: payload.address_id,
        },
      });
      resolve({
        ...globalThis.status_codes.success,
        data: {},
        message: "Company deleted sucessfully!",
      });
    } catch (err) {
      reject({
        ...globalThis.status_codes.error,
        message: "Cannot delete company, try again!",
      });
    }
  });
};

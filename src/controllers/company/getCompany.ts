import { Op } from "sequelize";
import { address } from "../../models/address";
import { company } from "../../models/company";
import { ResponseType, UserDetails } from "../../utils";

interface Payload {
  offset?: number;
  limit?: number;
  search?: string;
}

export const getCompanyController = (payload: Payload, user: UserDetails) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const offset = payload.offset ? payload.offset : 0;
      const limit = payload.limit ? payload.limit : 0;
      const search = payload.search ? payload.search : "";

      const query = await company.findAndCountAll({
        offset,
        limit,
        include: [
          {
            model: address,
            as: "address",
            attributes: [
              "id",
              "address_line",
              "city",
              "state",
              "country",
              "pincode",
            ],
          },
        ],
        where: {
          created_by: user.user_profile_id,
          name: {
            [Op.iLike]: `%${search}%`,
          },
        },
        distinct: true,
      });
      resolve({
        ...globalThis.status_codes?.success,
        data: query,
        message: "Company details fetched successfully!",
      });
    } catch (err) {
      console.log(err);
      return reject({
        ...globalThis.status_codes?.error,
        message: "Cannot fetch company details, try again!",
      });
    }
  });
};

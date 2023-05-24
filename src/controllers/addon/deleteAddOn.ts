import { add_on } from "../../models/add_on";
import { ResponseType } from "../../utils";

interface DeleteAddOnPayload {
  addon_id?: string;
}

export const deleteAddOnController = async (payload: DeleteAddOnPayload) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      await add_on.destroy({
        where: {
          id: payload.addon_id,
        },
      });

      resolve({
        ...globalThis.status_codes.success,
        data: {},
        message: "Add On deleted sucessfully!",
      });
    } catch (err) {
      reject({
        ...globalThis.status_codes.error,
        message: "Cannot delete Add On, try again!",
      });
    }
  });
};

import { add_on } from "../../models/add_on";
import { ResponseType } from "../../utils";

interface UpdateAddOnPayload {
  addon_id: string;
  name?: string;
  description?: string;
  is_active?: boolean;
}

export const updateAddOnController = async (payload: UpdateAddOnPayload) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const query = await add_on.update(
        {
          name: payload.name,
          description: payload.description,
          is_active: payload.is_active,
        },
        {
          where: {
            id: payload.addon_id,
          },
          returning: true,
        }
      );

      resolve({
        ...globalThis.status_codes.success,
        message: "Add on updated successfully!",
        data: query,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Cannot update add on, try again!",
      });
    }
  });
};

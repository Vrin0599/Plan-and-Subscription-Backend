import { ResponseType } from "../../utils";
import { charge } from "../../models/charge";

interface UpdateChargesPayload {
  charge_id: string;
  name?: string;
  description?: string;
  is_active?: boolean;
}

export const updateChargesController = async (
  payload: UpdateChargesPayload
) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const query = await charge.update(
        {
          name: payload.name,
          description: payload.description,
          is_active: payload.is_active,
        },
        {
          where: {
            id: payload.charge_id,
          },
        }
      );

      resolve({
        ...globalThis.status_codes.success,
        message: "Charges updated successfully!",
        data: query,
      });
    } catch (err) {
      console.log(err);
      reject({
        ...globalThis.status_codes?.error,
        message: "Cannot update Charges, try again!",
      });
    }
  });
};

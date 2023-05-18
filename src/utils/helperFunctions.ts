import axios from "axios";
import { globalIterface } from "./interfaces";

export const giveMeStatusCodes = (): globalIterface => {
  return {
    success: { status: 200, api_status: "API-OK" },
    success_no_data: { status: 200, api_status: "API-OK-NO-CONTENT" },
    bad_request: { status: 400, api_status: "API-BAD-REQUEST" },
    un_authorised: { status: 401, api_status: "API-UN-AUTHORISED-ACCESS" },
    forbidden: { status: 403, api_status: "API-FORBIDDEN" },
    not_found: { status: 404, api_status: "API-NOT-FOUND" },
    Conflict: { status: 409, api_status: "API-CONFLICT" },
    error: { status: 500, api_status: "API-ERROR" },
  };
};

export const authAxios = axios.create({
  baseURL: process.env.FRAMEWORK_SHELL_URL,
});

export const getUserProfile = (token: string) => {
  const headers = { authorization: token, "Content-Type": "application/json" };
  return authAxios.get("/auth/get_user_details", { headers });
};

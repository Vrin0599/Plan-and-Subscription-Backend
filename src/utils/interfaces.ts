export interface ResponseType {
  data?: object;
  status: 200 | 400 | 401 | 403 | 404 | 409 | 500;
  api_status:
    | "API-OK"
    | "API-OK-NO-CONTENT"
    | "API-BAD-REQUEST"
    | "API-UN-AUTHORISED-ACCESS"
    | "API-FORBIDDEN"
    | "API-NOT-FOUND"
    | "API-CONFLICT"
    | "API-ERROR";
  message?: string;
}

export interface globalIterface {
  success: ResponseType;
  success_no_data: ResponseType;
  bad_request: ResponseType;
  un_authorised: ResponseType;
  forbidden: ResponseType;
  not_found: ResponseType;
  Conflict: ResponseType;
  error: ResponseType;
}

export interface UserDetails {
  user_id?: number;
  username?: string;
  email?: string;
  first_name?: string;
  user_profile_id?: string;
}

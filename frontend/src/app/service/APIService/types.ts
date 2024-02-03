export interface APIResponse<APIResponse> {
  data: APIResponse;
  message: string;
  status: string;
}

export interface AccessToken {
  access_token: string
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
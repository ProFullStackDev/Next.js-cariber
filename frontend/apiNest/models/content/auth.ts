export interface Auth {
  access_token: string;
  statusCode: string;
  message: string;
  error: string;
}

export interface ValidateAuth {
  code: string;
  description: string;
}
export interface Register{
  id: number;
  email: string;
  password: string;
  google_id: string;
  facebook_id: string;
  statusCode: number;
  message: string[];
  error: string;
}
export interface Auth{
  jwt: string;
  user: User;
  error: Error;
}

export interface User{
  id: number;
  email: string;
  username: string;
  blocked: boolean;
  confirmed: boolean;
}

export interface Error{
  status: number;
  name: string;
  message: string;
}
export interface Auth{
  jwt: string;
  user: User;
}

export interface User{
  id: number;
  email: string;
  username: string;
  blocked: boolean;
  confirmed: boolean;
}
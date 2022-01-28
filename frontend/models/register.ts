import { User } from "./auth";

export interface RegisterResponse {
  user: User;
  error: Error;
}
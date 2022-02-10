import UserManager from "../../auth/userManager";

const userManager = new UserManager();
export const nest = "http://ec2-44-192-107-217.compute-1.amazonaws.com";
export const nestApi = nest + "/api";
export const nestAuthApi = nestApi + "/auth";
export const nestMyCourseApi = nestApi + "/users/my-course";
export const headersNest = {
  "Content-Type": "application/json; charset=utf-8"
}
export const headersNestAuth = {
  "Content-Type": "application/json; charset=utf-8",
  'Authorization': userManager.getJwtToken(),
}
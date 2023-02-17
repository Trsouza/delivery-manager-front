import { IEmployee } from "../interfaces/IEmployee";
import { privateAxios } from "./helper";

export const signUpEmployee = (user: IEmployee) => {
  return privateAxios.post("/employee", user).then((response: any) => response.data);
};

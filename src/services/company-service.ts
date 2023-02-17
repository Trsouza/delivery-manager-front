import { ICompany } from "../interfaces/ICompany";
import { privateAxios } from "./helper";

export const signUpCompany = (user: ICompany) => {
  return privateAxios.post("/company", user).then((response: any) => response.data);
};

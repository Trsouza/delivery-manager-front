import { privateAxios } from "./helper";

export const getUser = (userId: number) => {
  return privateAxios.get(`/user/${userId}`).then((response: any) => response.data);
};

export const getUsers = () => {
  return privateAxios.get(`/user`).then((response: any) => response.data);
};

export const roleUser = () => {
  return privateAxios.get(`role-user`)
    .then((response) => { return response.data })
    .catch(function (error) {
      if (error.response) {
        return error.response.status;
      } else if (error.request) {
        // The request was made but no response was received
        return 0;
      } else {
        // Something happened in setting up the request that triggered an Error
        return 1;
      }
    });
};
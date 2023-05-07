import { IAuthResponse } from "../interfaces/IAuth";

export const isLoggedIn = () => {
  let data = localStorage.getItem("user");
  if (data != null) return true;
  else return false;
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem("user");
};

export const setUserLocalStorage = (user: IAuthResponse | null) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const getCurrentUserDetailLocalStorage = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("user") ?? "").user;
  } else {
    return undefined;
  }
};

export const getTokenLocalStorage = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("user") ?? "").token;
  } else {
    return null;
  }
}

export const getUserLocalStorage = () => {
  const json = localStorage.getItem('user');

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);
  return user ?? null;
}

import { IAuthResponse } from "../interfaces/IAuth";

export function setUserLocalStorage(user: IAuthResponse | null) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem('user');

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}

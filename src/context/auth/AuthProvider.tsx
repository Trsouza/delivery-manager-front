import { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IAuthResponse } from "../../interfaces/IAuth";
import { LoginRequest } from "../../services/auth";
import { getUserLocalStorage, setUserLocalStorage, removeUserLocalStorage } from "../../auth";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [user, setUser] = useState<IAuthResponse | null>();

	useEffect(() => {
		const user = getUserLocalStorage();
		console.log(user, "ois")
		if (user) {
			setUser(user);
		}
	}, []);

	async function authenticate(email: string, password: string) {
		const response = await LoginRequest(email, password);
		const payload = { token: response.token, user: response.user };

		setUser(payload);
		setUserLocalStorage(payload);
	}

	function logout() {
		setUser(null);
		removeUserLocalStorage();
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, ...user, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
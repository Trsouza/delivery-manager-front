import { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IAuthResponse } from "../../interfaces/IAuth";
import { LoginRequest } from "../../services/auth";
import { getUserLocalStorage, setUserLocalStorage } from "../../auth";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [user, setUser] = useState<IAuthResponse | null>();

	useEffect(() => {
		const user = getUserLocalStorage();
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
		setUserLocalStorage(null);
	}

	return (
		<AuthContext.Provider value={{ ...user, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
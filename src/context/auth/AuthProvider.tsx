import { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IAuthResponse } from "../../interfaces/IAuth";
import { LoginRequest } from "../../services/auth";
import { getUserLocalStorage, setUserLocalStorage, removeUserLocalStorage } from "../../auth";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [user, setUser] = useState<IAuthResponse | null>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const user = getUserLocalStorage();
		setIsLoading(false);
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
		<AuthContext.Provider value={{ signed: !!user, isLoading: isLoading, ...user, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
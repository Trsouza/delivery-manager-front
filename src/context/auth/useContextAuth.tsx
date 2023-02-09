import { useContext } from "react";
import { AuthContext } from "./AuthProvider"

export const useContextAuth = () => {
    const context = useContext(AuthContext);
    return context;
}
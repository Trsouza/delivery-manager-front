import { Navigate, Outlet } from 'react-router-dom';
import { useContextAuth } from '../../context/auth/useContextAuth';
import { isLoggedIn } from '../../auth';

// export const ProtectedRoutes = ({ children }: {children:JSX.Element}) => {

// 	// const { user } = useContextAuth();
// 	const userIsLogged = isLoggedIn();

// 	if (!userIsLogged) {
// 			return (
// 					<Navigate to="/login"/>
// 			)
// 	}

// 	return children;

// }

export const ProtectedRoutes = () => {

	const userIsLogged = isLoggedIn();

  return userIsLogged ? <Outlet /> : <Navigate to="/login" />
}

//export default ProtectedRoutes;
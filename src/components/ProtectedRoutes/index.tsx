import { Navigate, Outlet } from 'react-router-dom';
import { useContextAuth } from '../../context/auth/useContextAuth';
// import { isLoggedIn } from '../../auth';

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

// export const ProtectedRoutes = ({ allowedRoles }: any) => {
//   const { signed, user } = useContextAuth();
//   console.log(user?.roles.find(role => allowedRoles?.includes(role)), "a", user?.roles, allowedRoles);
//   return signed ? <Outlet /> 
//             : <Navigate to="/login" />
//   }


  export const ProtectedRoutes = ({ allowedRoles }: any) => {
    const { signed, user } = useContextAuth();
    return signed && !!user?.roles.find(role => allowedRoles?.includes(role)) 
            ? <Outlet /> 
            : signed
              ? <Navigate to="/unauthorized" />
              : <Navigate to="/login" /> // Se a página existir e o usuário estiver logado encaminhara para o login
    }

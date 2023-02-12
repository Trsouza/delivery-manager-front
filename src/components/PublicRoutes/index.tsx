import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../../auth';

export const PublicRoutes = () => {
	const userIsLogged = isLoggedIn();
  return userIsLogged ? <Navigate to="/home"/>: <Outlet/>
}

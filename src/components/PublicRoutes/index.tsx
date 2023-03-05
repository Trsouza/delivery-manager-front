import { Outlet } from 'react-router-dom';
// import { isLoggedIn } from '../../auth';
// import { useContextAuth } from '../../context/auth/useContextAuth';

export const PublicRoutes = ({path}: any) => {
  // const { signed, isLoading, } = useContextAuth();
	// const userIsLogged = isLoggedIn();
  return <Outlet/>;
  // return userIsLogged ? <Navigate to="/home"/>: <Outlet/>
}

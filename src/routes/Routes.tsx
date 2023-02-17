
import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutComponent from '../components/Layout/index';
import { ProtectedRoutes } from '../components/ProtectedRoutes';
import { PublicRoutes } from '../components/PublicRoutes';
import { Home } from '../pages/Home';
import { Index } from '../pages/Index';
import { Login } from '../pages/Login';
import { Settings } from '../pages/Settings';
import { UserForm } from '../pages/Users/Form';
import { UserList } from '../pages/Users/List';

export const AppRoutes = () => {
	return (
		<Routes>

			{/* Rotas públicas */}
			<Route path="/index" element={<Index />}>
				<Route path="index" element={<Index />} />
			</Route>
			<Route path="/signup" element={<UserForm />}>
				<Route path="signup" element={<UserForm />} />
			</Route>

			{/* PublicRoutes: Evita que a tela de login seja exibida quando o usuário já estiver logado */}
			<Route path="/" element={<PublicRoutes />}>
				<Route path="/" element={<Navigate replace to="login" />} />
				<Route path="login" element={<Login />} />
			</Route>

			{/* Rotas privadas */}
			<Route element={<LayoutComponent><ProtectedRoutes /></LayoutComponent>}>
				<Route path="/home" element={<Home />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/users" element={<UserList />} />
			</Route>

			{/* <Route path="/" element={<Login />}>
				<Route path="/" element={<Navigate replace to="login" />} />
				<Route path="login" element={<Login />} />
				<Route path="settings" element={<Setting />} />
			</Route> */}

			{/* <Route path="/home" element={
				<ProtectedRoutes>
					<Home2 />
				</ProtectedRoutes>}
			/> */}

		</Routes>
	);
}

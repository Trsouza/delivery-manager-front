
import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutComponent from '../components/Layout/index';
import { ProtectedRoutes } from '../components/ProtectedRoutes';
import { PublicRoutes } from '../components/PublicRoutes';
import { Home } from '../pages/Home';
import { Index } from '../pages/Index';
import { Login } from '../pages/Login';
import { Settings } from '../pages/Settings';

export const AppRoutes = () => {
	return (
		<Routes>

			{/* Rotas públicas */}
			<Route path="/index" element={<Index />}>
				<Route path="index" element={<Index />} />
			</Route>

			{/* PublicRoutes: Evita que a tela de login seja exibida quando o usuário já estiver logado */}
			<Route path="/" element={<PublicRoutes />}>
				<Route path="/" element={<Navigate replace to="login" />} />
				<Route path="login" element={<Login />} />
			</Route>

			<Route element={<LayoutComponent><ProtectedRoutes /></LayoutComponent>}>
				<Route path="/home" element={<Home />} />
				<Route path="/settings" element={<Settings />} />
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

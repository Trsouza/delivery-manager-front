
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />}>
				<Route path="/" element={<Navigate replace to="login" />} />
				<Route path="login" element={<Login />} />
				{/* <Route path="settings" element={<Setting/>}/>     
        <Route path="index" element={<Index/>}/> */}
			</Route>
			<Route path="/home" element={<Home />}>
				<Route path="home" element={<Home />} />
			</Route>
		</Routes>
	);
}


import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LayoutComponent from '../components/Layout/index';
import { ProtectedRoutes } from '../components/ProtectedRoutes';
import { PublicRoutes } from '../components/PublicRoutes';
import { Home } from '../pages/Home';
import { Index } from '../pages/Index';
import { Login } from '../pages/Login';
import { Settings } from '../pages/Settings';
import { UserForm } from '../pages/Users/Form';
import { UserList } from '../pages/Users/List';
import { NotFound } from '../pages/NotFound';
import { Unauthorized } from '../pages/Unauthorized';
import { useContextAuth } from '../context/auth/useContextAuth';
import { isLoggedIn } from '../auth';


const ROLES = {
  "EMPLOYEE": "EMPLOYEE",
  "COMPANY": "COMPANY",
  "ADM": "ADM"
}

export const AppRoutes = () => {

  const { signed, isLoading } = useContextAuth();

  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/index" element={<Index />}>
        <Route path="index" element={<Index />} />
      </Route>
      <Route path="/signup" element={<UserForm />}>
        <Route path="signup" element={<UserForm />} />
      </Route>


      {signed === false &&
        <>
          <Route path="/" element={<Login />}>
            <Route path="/" element={<Navigate replace to="login" />} />
            <Route path="login" element={<Login />} />
          </Route>
        </>
      }

      {isLoading === false &&
        <>
          <Route element={<LayoutComponent><ProtectedRoutes allowedRoles={[ROLES.ADM, ROLES.EMPLOYEE]} /></LayoutComponent>}>
            <Route path="/login" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route element={<LayoutComponent><ProtectedRoutes allowedRoles={[ROLES.ADM]} /></LayoutComponent>}>
            <Route path="/users" element={<UserList />} />
          </Route>

        </>
      }

      <Route path="/unauthorized" element={<Unauthorized />} />
      {!isLoading && <Route path="*" element={<NotFound />} />}

      {/* PublicRoutes: Evita que a tela de login seja exibida quando o usuário já estiver logado */}
      {/* <Route path="/"  element={<PublicRoutes path={location.pathname} />}>
          <Route path="/" element={<Navigate replace to="login" />} />
          <Route path="login" element={<Login />} />
        </Route> */}
    </Routes>
  );
}

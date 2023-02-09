import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from "./routes/Routes";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from './context/auth/AuthProvider';
import './App.css';

export function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>     
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
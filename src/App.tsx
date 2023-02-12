import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from "./routes/Routes";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from './context/auth/AuthProvider';
import './App.css';
// import './index.css';
import { ConfigProvider } from 'antd';

export function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#F57C00",
          },
        }}
      >
        <GlobalStyle />
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ConfigProvider>
    </>
  );
}
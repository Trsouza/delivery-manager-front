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
            colorPrimary: '#F9B73D',
            // colorPrimary: '#00b96b',
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
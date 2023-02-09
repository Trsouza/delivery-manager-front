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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


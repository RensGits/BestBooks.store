import './App.css';
import NavigationBar from './components/navigation/NavigationBar.js';
import Router from './router/Router';
import { BrowserRouter } from "react-router-dom";
import LoginRegister from './components/loginRegister/loginRegisterHeader/LoginRegisterHeader';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
        <div>
          <LoginRegister />
        </div>
        <NavigationBar />
          <Router/>
        </BrowserRouter>   
      </div>
    </AuthProvider>
  );
}

export default App;

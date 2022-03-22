import './App.css';
import LoginRegister from './components/loginRegister/LoginRegister.js';
import NavigationBar from './components/navigation/NavigationBar.js';
import Router from './router/Router';
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <div>
        <LoginRegister />
      </div>
      <BrowserRouter>
      <NavigationBar />
        <Router/>
      </BrowserRouter>   
    </div>
  );
}

export default App;

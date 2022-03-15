import './App.css';
import LoginRegister from './components/login-register/LoginRegister.js';
import NavigationBar from './components/navigation/NavigationBar.js';
import AllBooks from './pages/all-books/AllBooks.js';
import BrowseLists from './pages/browse-lists/BrowseLists.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div>
        <LoginRegister />
        <NavigationBar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllBooks />} /> 
          <Route path="/browse-lists" element={<BrowseLists />} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;

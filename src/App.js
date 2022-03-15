import './App.css';
import LoginRegister from './components/loginRegister/LoginRegister.js';
import NavigationBar from './components/navigation/NavigationBar.js';
import AllBooks from './components/Pages/allBooksPage/AllBooks';
import BrowseLists from './components/Pages/browseListsPage/BrowseLists';
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

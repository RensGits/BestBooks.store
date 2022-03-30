import { Route, Routes } from "react-router-dom"
import LoginModal from "../components/loginRegister/modals/loginModal/LoginModal.js"
import RegisterModal from "../components/loginRegister/modals/registerModal/RegisterModal.js"
import ResetPasswordModal from "../components/loginRegister/modals/resetPasswordModal/ResetPasswordModal.js"
import AllBooksPage from "../components/Pages/allBooksPage/AllBooksPage.js"
import BrowseListsPage from "../components/Pages/browseListsPage/BrowseListsPage.js"
import List from "../components/Pages/browseListsPage/pageComponents/List.js"
import ListDetails from "../components/Pages/detailsPage/ListDetails.js"
import UserProfilePage from "../components/Pages/userProfilePage/UserProfilePage.js"
import PrivateRoute from "./PrivateRoute.js"

export default function Router(){
    
    return(
        <Routes>
            <Route exact path="/" element={<AllBooksPage />}>
                <Route path="login" element={<LoginModal />} />
                <Route path="register" element={<RegisterModal />} />
                <Route path="reset-password" element={<ResetPasswordModal />} />
            </Route> 
            <Route exact path='/' element={<PrivateRoute/>}> 
                <Route path="/profile/my-profile" element={<UserProfilePage />} /> 
                <Route path="/profile/my-reviews" element={<UserProfilePage />} /> 
            </Route>
            <Route path="/browse-lists" element={<BrowseListsPage />} />
            <Route path="/browse-lists/:listName" element={<List/>} />
            <Route path="/browse-lists/:listName/details/:selectedBook" element={<ListDetails/>} />
            <Route path="/book-details/:bookName/" element={<ListDetails/>} /> 
      </Routes>
    )
}

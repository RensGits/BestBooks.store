import { Route, Routes } from "react-router-dom"
import AllBooksPage from "../components/Pages/allBooksPage/AllBooksPage.js"
import BrowseListsPage from "../components/Pages/browseListsPage/BrowseListsPage.js"
import List from "../components/Pages/browseListsPage/pageComponents/List.js"
import ListDetails from "../components/Pages/detailsPage/ListDetails.js"




export default function Router(){
    
    

    return(
        <Routes>
            <Route exact path="/" element={<AllBooksPage />} /> 
            <Route path="/browse-lists" element={<BrowseListsPage />} />
            <Route path="/browse-lists/:listName" element={<List/>} />
            <Route path="/browse-lists/:listName/details/:selectedBook" element={<ListDetails/>} />
      </Routes>
    )
}
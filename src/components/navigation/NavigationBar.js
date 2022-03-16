import './NavigationBar.css'
import SearchBar from './SearchBar'
import { NavLink, useLocation } from 'react-router-dom'

export default function NavigationBar(){

    const activeStyle = ({ isActive }) => "navigationbar-item" + (isActive ? "-active" : "")
    const route = useLocation();
    console.log(route)
  
    return(
        <div className='navigationbar-container'>
            <ul className='navigationbar-items-container'>
                <div className='navigationbar-item-container'>
                    <NavLink to="/" className={activeStyle}>All books</NavLink>
                    {route.pathname ==='/' &&
                        <hr className='navigationbar-item-underline'/>
                    }
                </div>
                
                <div className='navigationbar-item-container'>
                    <NavLink to="/browse-lists" className={activeStyle}>Browse lists</NavLink>
                    {route.pathname ==='/browse-lists' &&
                            <hr className='navigationbar-item-underline'/>
                        }
                </div>
            </ul>
            <SearchBar/>
        </div>
    )
}
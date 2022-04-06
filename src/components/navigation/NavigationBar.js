import './NavigationBar.css'
import SearchBar from './SearchBar'
import { NavLink, useLocation } from 'react-router-dom'
import Underline from '../underline/Underline.js'

export default function NavigationBar(){

    const activeStyle = ({ isActive }) => "navigationbar-item" + (isActive ? "-active" : "")
    const route = useLocation();
    
    return(
        <div className='navigationbar-container'>
            <div className='navigationbar-items-container'>
                <div className='underline-container'>
                    <NavLink to="/" className={activeStyle}>All books</NavLink>
                    {route.pathname ==='/' &&
                        <Underline cName="underline" />
                    }
                </div>
                <div className='underline-container'>
                    <NavLink to="/browse-lists" className={activeStyle}>Browse lists</NavLink>
                    {route.pathname.includes('/browse-lists') &&
                        <Underline cName="underline" />
                    }
                </div>
            </div>
            <SearchBar/>
        </div>
    )
}
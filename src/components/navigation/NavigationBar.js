import './NavigationBar.css'
import SearchBar from './SearchBar'

export default function NavigationBar(){
    return(
        <div className='navigationbar-container'>
            <ul className='navigationbar-items-container'>
                <li className='navigationbar-item'>All books</li>
                <li className='navigationbar-item'>NYTimes top 200</li>
                <li className='navigationbar-item'>BestBooks top 200</li>
                <li className='navigationbar-item'>Browse lists</li>
            </ul>
            <SearchBar/>
        </div>
    )
}
import './Header.css'
import BackArrow from "../backArrow/BackArrow"
import Underline from "../underline/Underline"

export default function Header(props){
    
    return(
        <div className='list-header-container'>
                    <div>
                        <BackArrow />
                    </div>
                    <div className='list-title-container'>
                        <div className='underline-container'>
                            <p className='underline-extention'><span className='list-indicator'>{props.type + ':'} </span>{props.name}</p>
                            <Underline/>
                        </div>
                    </div>
        </div>
    )
}
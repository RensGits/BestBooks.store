import './ListHeader.css'
import BackArrow from "../backArrow/BackArrow"
import Underline from "../underline/Underline"

export default function ListHeader(props){
    
    return(
        <div className='list-header-container'>
                    <div>
                        <BackArrow />
                    </div>
                    <div className='list-title-container'>
                        <div className='underline-container'>
                            <p className='underline-extention'><span className='list-indicator'>List: </span>{props.listName}</p>
                            <Underline/>
                        </div>
                    </div>
        </div>
    )
}
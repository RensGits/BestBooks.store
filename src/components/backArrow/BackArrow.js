import './BackArrow.css'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function BackArrow(props){

    const navigate = useNavigate();

    return(
        <div className='backarrow-container' onClick={() => navigate(props.to)}>
            <BsArrowLeft />
            <p className='backarrow-text'>back</p>
        </div>
    )
}
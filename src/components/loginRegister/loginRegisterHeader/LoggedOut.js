import './LoginRegisterHeader.css';
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineLogin } from 'react-icons/ai'

export default function LoggedOut() {

    const navigate = useNavigate();
    return (
        <>
            <div className='login-container'>
                <AiOutlineLogin onClick={()=> navigate('login')} /> 
                <Link to='login'>LOGIN</Link>
            </div>
            <div className='register-container'>
                <Link to='register'>REGISTER</Link>
            </div>
            
        </>
    )
}

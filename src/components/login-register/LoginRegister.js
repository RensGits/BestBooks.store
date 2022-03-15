import './LoginRegister.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function LoginRegister(){
    return(
        <div className='loginregister-page-container'>
            <div className='login-container'>
                <p>LOGIN</p>
            </div>
            <div className='register-container'>
                <p>REGISTER</p>
            </div>
            <div className='info-icon-container'>
                <AiOutlineInfoCircle/>
            </div>
            
        </div>
    )
}
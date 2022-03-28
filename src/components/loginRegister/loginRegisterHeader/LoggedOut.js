import './LoginRegisterHeader.css';
import { Link } from "react-router-dom"

export default function LoggedOut() {
    return (
        <>
            <div className='login-container'>
                <Link to='login'>LOGIN</Link>
            </div>
            <div className='register-container'>
                <Link to='register'>REGISTER</Link>
            </div>
            
        </>
    )
}

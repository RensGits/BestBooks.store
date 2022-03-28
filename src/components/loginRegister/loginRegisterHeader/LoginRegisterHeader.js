import './LoginRegisterHeader.css';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useAuth } from '../../../contexts/AuthContext';
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';

export default function LoginRegister(){

    const { currentUser } = useAuth();

    return(
        <div className='loginregister-page-container'>
             {!currentUser &&
                <LoggedOut />
             }   
            {currentUser &&
                <LoggedIn />
            }
            <div className='info-icon-container'>
                <AiOutlineInfoCircle />
            </div>
        </div>
    )
}
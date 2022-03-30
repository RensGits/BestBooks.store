import '../LoginRegisterModal.css'
import { useAuth } from '../../../../contexts/AuthContext';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function ResetPasswordModal(){

    const [error, setError] = useState('')
    const [trying, setTrying] = useState(false)
    const [success, setSuccess] = useState(false)
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setError('')
            setTrying(true)
            await resetPassword(emailRef.current.value)
            setSuccess(true)
        } catch(response) {
            setError('Failed to reset password')
        }
            setTrying(false)
        
    }

    return(
        <>
          
          <div className='modal-container'>
            {!success &&
                <h1>Reset password</h1>
            }
            {error &&
                <div className='loginregister-error'>
                    <p>{error}</p>
                </div>
            }
            {!success &&
                <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='email' autoComplete='email' ref={emailRef} />
                <button type="submit" name="" id="" disabled={trying}>Reset</button>
            </form>
            }
            {success &&
                <p className='resetpassword-confirmation-text'>An email has been send to the email adress you provided. Check your inbox for further instructions.</p>
            }
            <p onClick={() => navigate('/login')}>Log in</p>
            {!success &&
                <p onClick={() => navigate('/register')}>Don't have an account yet?</p>
            }
            
            </div> 
            <div className='modal-underlay' onClick={() => navigate('/')}></div>
        </>
        
    )
}
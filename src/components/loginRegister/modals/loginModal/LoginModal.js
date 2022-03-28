import '../LoginRegisterModal.css'
import { useAuth } from '../../../../contexts/AuthContext';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function LoginModal(){

    const [error, setError] = useState('')
    const [trying, setTrying] = useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setError('')
            setTrying(true)
            await login(emailRef.current.value, passwordRef.current.value)
            console.log('login succes')
            navigate('/')
        } catch(response) {
            setError('Failed to login')
            console.log(response)
        }
            setTrying(false)
        
    }

    return(
        <>
          
          <div className='modal-container'>
            <h1>Login</h1>
            {error &&
                <div className='loginregister-error'>
                    <p>{error}</p>
                </div>
            }
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='email' autoComplete='email' ref={emailRef} />
                <input type="password" placeholder='password' autoComplete='new-password' ref={passwordRef} />
                <button type="submit" name="" id="" disabled={trying}>Log in</button>
            </form>
            <p onClick={() => navigate('/register')}>Don't have an account yet?</p>
            </div> 
            <div className='modal-underlay' onClick={() => navigate('/')}></div>
        </>
        
    )
}
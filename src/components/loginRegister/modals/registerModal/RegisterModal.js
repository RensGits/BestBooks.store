import '../LoginRegisterModal.css'
import { useAuth } from '../../../../contexts/AuthContext';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterModal(){

    const [error, setError] = useState('')
    const [trying, setTrying] = useState(false)
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { register } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match!')
        }

        try{
            setError('')
            setTrying(true)
            await register(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch(response) {
            setError('Failed to register')
            console.log(response)
        }
            setTrying(false)
        
    }

    return(
        <>
            <div className='modal-container'>
                <h1>Register</h1>
                {error &&
                    <div className='loginregister-error'>
                        <p>{error}</p>
                    </div>
                }
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='username' autoComplete='username' ref={userNameRef} />
                    <input type="text" placeholder='email' autoComplete='email' ref={emailRef} />
                    <input type="password" placeholder='password' autoComplete='new-password' ref={passwordRef} />
                    <input type="password" placeholder='confirm password' autoComplete='new-password' ref={passwordConfirmRef} />
                    <button type="submit" name="" id="" disabled={trying}>Register</button>
                </form>
                <p onClick={() => navigate('/login')}>Or log in</p>
            
            </div>
            <div className='modal-underlay' onClick={()=>{
                console.log('clicked')
                navigate('/')}}></div>
         </>
    )
}
import '../LoginRegisterModal.css'
import { useAuth } from '../../../../contexts/AuthContext';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function RegisterModal(){

    const [error, setError] = useState('')
    const [trying, setTrying] = useState(false)
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
            <div className='modal-close-icon' onClick={() => navigate('/')}>
                <AiOutlineCloseCircle />
            </div>
                <h1>Register</h1>
                {error &&
                    <div className='loginregister-error'>
                        <p>{error}</p>
                    </div>
                }
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='email' autoComplete='email' ref={emailRef} required />
                    <input type="password" placeholder='password' autoComplete='new-password' ref={passwordRef} required />
                    <input type="password" placeholder='confirm password' autoComplete='new-password' ref={passwordConfirmRef} required />
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
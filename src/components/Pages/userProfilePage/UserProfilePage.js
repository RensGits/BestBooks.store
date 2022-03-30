import './UserProfilePage.css'
import '../../../App.css'
import { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';

export default function UserProfilePage(){

    const [error, setError] = useState('')
    const [trying, setTrying] = useState(false)
    const [message, setMessage] = useState('')
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();

    function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match!')
        }

        const promises = []

        setTrying(true)
        setError('')
        setMessage('')
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            setMessage('Profile updated!')
        }).catch(() => {
            setError('Failed to update!')
        }).finally(() => {
            setTrying(false)
        })

        
        
    }

    return(
        <div className="page-container">
            <div className='content-container' style={{marginTop:'5em'}}>
                <div className='userprofile-menu-container'>
                    <p>My Profile</p>
                    <p>My Reviews</p>
                </div>
                <div className='line-divider'></div>
                <div className='update-profile-container'>
                    <h1>My profile</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder={currentUser.email} autoComplete='email' ref={emailRef} />
                        <input type="password" placeholder='new password' autoComplete='new-password' ref={passwordRef} />
                        <input type="password" placeholder='confirm new password' autoComplete='new-password' ref={passwordConfirmRef} />
                        <button type="submit" name="" id="" disabled={trying}>Update profile</button>
                    </form>
                    
                    {error &&
                        <div className='loginregister-error'>
                            <p>{error}</p>
                        </div>
                    }
                    {!error &&
                        <div className='loginregister-error'>
                            <p>{message}</p>
                        </div>
                    }
            
            
                 </div>
            </div>
        </div>
    )
}
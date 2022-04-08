import './LoginRegisterHeader.css';
import { CgProfile } from 'react-icons/cg'
import { RiProfileLine } from 'react-icons/ri'
import { MdOutlineRateReview } from 'react-icons/md'
import { VscSignOut } from 'react-icons/vsc'
import { useAuth } from '../../../contexts/AuthContext';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoggedIn(){

    const { currentUser, signOut } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [openProfileOptions, setOpenProfileOptions] = useState(false)
    const handleOpen = () => {
        setOpenProfileOptions(true)
    }
    const handleClose = () => {
        setOpenProfileOptions(false)
    }

    async function handleSignOut(){
        setError('')

        try{
            await signOut()
            navigate('/')
        }
        catch{
            setError('Failed to sign out')
        }
    }
    return(
        <div onMouseEnter={handleOpen} onMouseLeave={handleClose} className='loginregister-wrapper'>
        <div className='loggedin-container'>
            <p>Hi {currentUser.email}!</p>
        </div>
        <div style={{width: '1em', margin: '0 1em'}}>
            <CgProfile style={{width: '0.9em'}}/>
        </div>
        
        {openProfileOptions &&
            <div className='profileoptions-container'>
                <Link to={'/profile/my-profile'}>my profile <RiProfileLine className='profile-dropdown-icon' /></Link>
                <Link to={'/profile/my-reviews'} >my reviews<MdOutlineRateReview className='profile-dropdown-icon' /></Link>
                <a onClick={handleSignOut}>sign out<VscSignOut className='profile-dropdown-icon' /></a>
            </div>
        }
        </div>
    ) 
}

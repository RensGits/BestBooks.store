import './UserProfilePage.css'
import '../../../App.css'
import { Outlet, useNavigate } from 'react-router-dom'


export default function UserProfilePage(){

    const navigate = useNavigate();

    return(
        <div className="page-container">
            <div className='content-container' style={{marginTop:'5em', minHeight: '90vh', height: 'auto'}}>
                <div className='userprofile-menu-container'>
                    <p onClick={() => navigate('my-profile')}>My Profile</p>
                    <p onClick={() => navigate('my-reviews')}>My Reviews</p>
                </div>
                <div className='line-divider'></div>
                <Outlet/>
            </div>
        </div>
    )
}

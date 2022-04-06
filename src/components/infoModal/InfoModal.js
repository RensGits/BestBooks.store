import '../loginRegister/loginRegisterHeader/LoginRegisterHeader.css'
import { useState } from "react"
import { AiOutlineInfoCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


export default function InfoModal(){
    const navigate = useNavigate
    const [openInfo, setOpenInfo] = useState(false)
    const handleOpen = () => {
        setOpenInfo(true)
    }
    const handleClose = () => {
        setOpenInfo(false)
    }

    return(
        
        <div onMouseEnter={handleOpen} onMouseLeave={handleClose} className='loginregister-wrapper'>
            <div>  
                <AiOutlineInfoCircle className='info-icon-container' />
            </div>
           
            
                {openInfo &&

                   <div className='info-container'>   
                        <div className='modal-close-icon' onClick={() => navigate('/')}>
                            <AiOutlineCloseCircle />
                        </div>
                        <h1>Welcome to BestBooks!</h1>
                        <p>BestBooks is a web application for browsing books retrieved from the 'New York Times' Books API. This API provides data on all books rated and reviewed by the New York Times. BestBooks offers multiple ways to navigate to your new favorite title. 
                        <br/><br/>
                        In the All books tab, all books can be filtered by author, publisher, weeks that books have been listed and their rank. 
                        <br/><br/>
                        In the Browse lists tab, best seller lists can be found of different categories.
                        <br/><br/>
                        Don't be shy and let the world know what you thought of your New York Times titles!

                        </p>
                    </div>

                }
                
            
           
        </div>
    )
}
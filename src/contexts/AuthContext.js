import React from 'react'
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { auth } from '../firebase'


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function register(email,password){  // firebase register authentication
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email,password){     // firebase login authentication
        return auth.signInWithEmailAndPassword(email,password)
    }

    function signOut(){
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    },[])

    const value = {
        currentUser,
        register,
        login,
        signOut,
    }

   
    return(
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}
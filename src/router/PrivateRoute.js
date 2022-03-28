import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ children }){

    const { currentUser } = useAuth();

    return currentUser ? <Outlet /> : <Navigate to="/login" />; 
    // determine if authorized
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page   
}
    
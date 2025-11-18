import React, { use } from 'react';
import { AuthContext } from '../Contexts & Providers/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Pages/Shared/LoadingSpinner';

const PrivateRoute = ({children}) => {


    
   const {user,loading} = use(AuthContext)
// location to redirect user after login
   const location = useLocation();

   if(loading){
    return <LoadingSpinner></LoadingSpinner>
   }

   if(!user){
      return <Navigate to="/login" state={location.pathname}></Navigate>
   }
   
   return children;
};

export default PrivateRoute;
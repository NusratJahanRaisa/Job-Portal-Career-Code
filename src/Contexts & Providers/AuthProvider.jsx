import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);

    const createUser = (email,pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const signInUser = (email,pass) =>{
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const authInfo = {
         loading,
         createUser,
         signInUser,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
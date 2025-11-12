import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    const createUser = (email,pass) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const signInUser = (email,pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const signOutUser = () =>{
        return signOut(auth);
    }


    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
        setLoading(false);
        setUser(currentUser)
        console.log("user from observer - ",currentUser);
      })

      return ()=>{
        unsubscribe();
      }
    },[])
    const authInfo = {
         user,
         loading,
         createUser,
         signInUser,
         signOutUser,
         
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
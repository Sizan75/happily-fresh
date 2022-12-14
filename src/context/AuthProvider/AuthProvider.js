import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile} from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext= createContext()
const AuthProvider = ({children}) => {
    const auth= getAuth(app)
    const [user, setuser]=useState(null)    
    const [loading, setLoading]=useState(true)
    
     // creating user by email password 
     const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
    const singInGoogle = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setuser(currentUser)
            console.log(currentUser)
            setLoading(false)
            
        })
           return ()=>{
            unsubscribe();
        }
    }, [])
    const updateUserprofile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
    const usersignOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    const authInfo={
        createUser,
        singInGoogle,
        usersignOut,
        userLogIn,
        updateUserprofile,
        user,
        loading,

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
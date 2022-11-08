import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
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
    const singInGoogle = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const authInfo={
        createUser,
        singInGoogle,
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
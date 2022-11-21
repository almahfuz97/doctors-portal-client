import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const signIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser == null || currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        })

        return () => unsubscribe();
    }, [])

    const authInfo = { createUser, signIn, providerLogin, logOut, user, loading }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
}

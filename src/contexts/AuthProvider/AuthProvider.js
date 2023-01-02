import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';




export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userCoustom, setUserCoustom] = useState(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            return unsubscribe();
        }
    }, []);

 
    const handelMyOreder = id => {
        const token = localStorage.getItem('accessToken')

        fetch(`https://resale-backend.vercel.app/verifyuser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
          },
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
      }
    //   console.log(localStorage.getItem('accessToken'));

      useEffect(() => {
        handelMyOreder()
      }, [])



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = { user, loading, createUser, signInUser, signOutUser, setLoading, userCoustom, setUserCoustom }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
        
    );
};

export default AuthProvider;
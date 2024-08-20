

import { createContext, useEffect, useState } from "react";
// step 1
export const AuthContext = createContext();

// step 2
/**
 * 
 * @param {*} param0 
 * @returns 
 * where ever we call this contect state name must me similaar in that component
 */
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    ) 
    const updateUser = (data) => {
        setCurrentUser(data);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])
    return (
        <AuthContext.Provider value={{ currentUser, updateUser}}>
            {children}
        </AuthContext.Provider>
    );

   
}





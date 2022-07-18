import { createContext, useState } from 'react';

export const UserContext = createContext();
UserContext.displayName = "UserContext";

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [password, setPassword] = useState("");
    const [passValid, setPassValid] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    
    return (
        <UserContext.Provider value={ {
            email, 
            setEmail, 
            emailValid,
            setEmailValid,
            password, 
            setPassword,
            passValid,
            setPassValid,
            user, 
            setUser,
            error, 
            setError
        }}>
            {children}
        </UserContext.Provider>
    )
}
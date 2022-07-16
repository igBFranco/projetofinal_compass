import { createContext, useState } from 'react';

export const PasswordContext = createContext();
PasswordContext.displayName = "PasswordContext";

export const PasswordProvider = ({ children }) => {
    const [ sixChar, setSixChar] = useState(false);
    const [ lowerCase, setLowerCase] = useState(false);
    const [ upperCase, setUpperCase] = useState(false);
    const [ passNumber, setPassNumber] = useState(false);
    return (
        <PasswordContext.Provider value={ {
            sixChar,
            lowerCase,
            upperCase,
            passNumber,
            setLowerCase,
            setPassNumber,
            setSixChar,
            setUpperCase
        }}>
            {children}
        </PasswordContext.Provider>
    )
}
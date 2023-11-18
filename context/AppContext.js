import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext()

export const useApp = () => useContext(AppContext);

export const AppProvider = ({children}) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [background, setBackground] = useState('bg-space');

    return <AppContext.Provider value={{
        isMenuOpen, setMenuOpen,
        isProfileOpen, setProfileOpen,
        background, setBackground
    }}>{children}</AppContext.Provider>
}
import { createContext, useState } from "react";

export const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({children}) => {
    const [screenSize, setScreenSize] = useState();
    const updateScreenSize = (size) => {
        setScreenSize(size);
    }

    return (
        <ScreenSizeContext.Provider value={{screenSize,updateScreenSize}}>
            {children}
        </ScreenSizeContext.Provider>
    )
}
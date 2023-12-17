import { createContext, useState } from "react";

export const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({children}) => {
    const [screenSize, setScreenSize] = useState();
    const isDeviceMobile = screenSize <= 768 ? true : false;
    const updateScreenSize = (size) => {
        setScreenSize(size);
    }

    return (
        <ScreenSizeContext.Provider value={{isDeviceMobile,updateScreenSize}}>
            {children}
        </ScreenSizeContext.Provider>
    )
}
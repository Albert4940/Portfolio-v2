import { useContext} from 'react';
import { ScreenSizeContext, MenuContext} from "../context";

export const useScreenSize = () => {
    const {isDeviceMobile,updateScreenSize} = useContext(ScreenSizeContext);
    return {isDeviceMobile,updateScreenSize};
}

export const useMenuContext = () => {
    const {isOpenMenu,toggleMenu} = useContext(MenuContext);
    return {isOpenMenu,toggleMenu};
}
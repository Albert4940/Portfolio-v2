import { useContext} from 'react';
import { ScreenSizeContext, MenuContext, ThemeContext} from "../context";
import generateColors from '../style/colors';

export const useScreenSize = () => {
    const {isDeviceMobile,updateScreenSize} = useContext(ScreenSizeContext);
    return {isDeviceMobile,updateScreenSize};
}

export const useMenuContext = () => {
    const {isOpenMenu,toggleMenu} = useContext(MenuContext);
    return {isOpenMenu,toggleMenu};
}

export const useTheme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return {theme, toggleTheme};
}

export const useColor = () =>  generateColors(useTheme().theme);
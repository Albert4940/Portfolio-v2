import { useContext} from 'react';
import { ScreenSizeContext } from "../context";

export const useScreenSize = () => {
    const {isDeviceMobile,updateScreenSize} = useContext(ScreenSizeContext);
    return {isDeviceMobile,updateScreenSize};
}
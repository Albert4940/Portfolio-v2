import styled from "styled-components";
import { useColor, useScreenSize } from "../../utils/hooks";

const FooterWrapper = styled.footer`
font-weight: 600;
display: flex;
justify-content: space-evenly;
padding: 3rem;
background: ${({colors}) => colors && colors.fourthy};
border-top: 4px solid ${({colors}) => colors && colors.primary};
${
    ({isDevice}) => 
        isDevice && 
        (`
            flex-direction: column;
            text-align: center;
        `)
 }
`
const Footer = () => {
    const colors = useColor();
    const {isDeviceMobile} = useScreenSize();
    return(
        <FooterWrapper colors={colors} isDevice={isDeviceMobile}>
            <p>Created by Albert-Mary Dorce</p>
        </FooterWrapper>
    )
}

export default Footer;
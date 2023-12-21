import {ButtonStyle} from "../../utils/style/ButtonStyle";
import { FaArrowDown } from "react-icons/fa";
import { useColor } from "../../utils/hooks";
import styled from "styled-components";
//export without function

const IStyle = {
    marginLeft: '10px',
    translateX: '0',
    transition: 'transform 0.3s ease-out',
}

const Button = styled.button`
  ${({colors}) => colors && ButtonStyle(colors)}
`
// const Button = styled.
const ResumeButton = () => {
    return(
        <Button colors={useColor()}>
          <a 
            href="path/to/file" 
            alt="" 
            download>
                Resume
            </a>
          <FaArrowDown style={IStyle}/>            
        </Button>
    )
}
export default ResumeButton;
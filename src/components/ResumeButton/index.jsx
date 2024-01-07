import {ButtonStyle} from "../../utils/style/ButtonStyle";
import { FaArrowDown } from "react-icons/fa";
import { useColor } from "../../utils/hooks";
import ResumeFile from "../../file/AlbertDevCV.pdf"
import styled from "styled-components";
//export without function

const IStyle = {
    marginLeft: '10px',
    translateX: '0',
    transition: 'transform 0.3s ease-out',
}

const Button = styled.a`
  ${({colors}) => colors && ButtonStyle(colors)}

`
// const Button = styled.
const ResumeButton = () => {
    return(
        <Button 
        href={ResumeFile} 
        alt="" 
        download
          colors={useColor()}>
          {/* <a 
            href="path/to/file" 
            alt="" 
            download>
                
            </a> */}
            Resume
          <FaArrowDown style={IStyle}/>            
        </Button>
    )
}
export default ResumeButton;
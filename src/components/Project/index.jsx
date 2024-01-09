import styled from "styled-components"
import GridStyle from "../../utils/style/GridStyle"
import {projects} from "../../data"
import { Project } from "./Project"
import { ButtonStyle } from "../../utils/style/ButtonStyle"
import { useColor, useScreenSize } from "../../utils/hooks"
import { FaChevronRight } from "react-icons/fa";
import ResumeButton from "../ResumeButton"

const ProjectContainer = styled.section`
    text-align: center;
    padding: 10rem 2rem;
    
`
const ProjectGrid = GridStyle();

// const Button = styled.button`
// ${({colors}) => colors && ButtonStyle(colors)}
// transition: background 0.3s ease-out;
// &:hover{
//     svg {
//         transform: translateX(2px);
//       }
// }
// `

const Button = styled.a`
${({colors}) => colors && ButtonStyle(colors)}
transition: background 0.3s ease-out;
width: 7.8em;
${(isDeviceMobile) => isDeviceMobile && `width: 7.9em;`}
&:hover{
    svg {
        transform: translateX(2px);
      }
}
`

const IconStyle = {
    marginLeft: '10px',
    translateX: '0',
    transition: 'transform 0.3s ease-out',
}
const ShowAllButton = () => {
    const {isDeviceMobile} = useScreenSize();
    return(
        <Button href="https://github.com/Albert4940" colors={useColor()} isDeviceMobile={isDeviceMobile}>
                Show All
          <FaChevronRight style={IconStyle}/>            
        </Button>
    )
}

export const ProjectSection = () => {
    
    return(
        <ProjectContainer id="works" >
            <h2 >These are some my projects</h2>
            <br />
            <ProjectGrid>
                {projects.map((item,index) => (
                    <Project key={`${item.title}-${index}`} project={item} />
                ))}
            </ProjectGrid>
            <ShowAllButton />
            {/* <ResumeButton /> */}
        </ProjectContainer>
    )
}

//export default ProjectSection;
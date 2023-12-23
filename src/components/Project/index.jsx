import styled from "styled-components"
import GridStyle from "../../utils/style/GridStyle"
import {projects} from "../../data"
import { Project } from "./Project"
import { ButtonStyle } from "../../utils/style/ButtonStyle"
import { useColor } from "../../utils/hooks"
import { FaChevronRight } from "react-icons/fa";

const ProjectContainer = styled.section`
    text-align: center;
    padding: 10rem 2rem;
    
`
const ProjectGrid = GridStyle();

const Button = styled.button`
${({colors}) => colors && ButtonStyle(colors)}
transition: background 0.3s ease-out;
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
    return(
        <Button colors={useColor()}>
          <a 
            href="path/to/file" 
            alt="" 
            download>
                Show All
            </a>
          <FaChevronRight style={IconStyle}/>            
        </Button>
    )
}

export const ProjectSection = () => {
    return(
        <ProjectContainer>
            <h2>These are some my projects</h2>
            <ProjectGrid>
                {projects.map((item,index) => (
                    <Project key={`${item.title}-${index}`} project={item} />
                ))}
            </ProjectGrid>
            <ShowAllButton />
        </ProjectContainer>
    )
}

//export default ProjectSection;
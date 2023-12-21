import styled from "styled-components"
import GridStyle from "../../utils/style/GridStyle"
import {projects} from "../../data"
import { Project } from "./Project"

const ProjectContainer = styled.section`
    text-align: center;
    padding: 10rem 2rem;
    
`
const ProjectGrid = GridStyle();
export const ProjectSection = () => {
    return(
        <ProjectContainer>
            <h2>These are some my projects</h2>
            <ProjectGrid>
                {projects.map((item,index) => (
                    <Project key={`${item.title}-${index}`} project={item} />
                ))}
            </ProjectGrid>
        </ProjectContainer>
    )
}

//export default ProjectSection;
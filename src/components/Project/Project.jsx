import styled from "styled-components";
import { useColor } from "../../utils/hooks";
//try to use css pseudo like before and content for description
//try to put a description on image without put img in background

const ProjectStyled = styled.a`
display: block;
overflow: hidden;
height: 40rem;
background-image: url(${({Pic}) => Pic && Pic});
    background-repeat:no-repeat;
    background-size:cover; 
    &:hover{
        div{
            margin-right:0;
          }
    }
`

const Description = styled.div`
    /*background: rgba(56, 70, 86, 0.50);*/
    margin-right:-1280px;
    z-index: 3;
    transition:0.5s;
`

const ProjectTitle = styled.h3`
    
`
const DescriptionWrapper = styled.div`
background:red;
position:absolute;
top:0;
height:100%;
opacity:0;
visibility: hidden;
transition: opacity 0.3s ease;
background: rgba(56, 70, 86, 0.90);
// margin-right:-1280px;
`

const DescriptionContainer = styled.a`
// max-width: 300px;
margin: auto;
position:relative;
&:hover{
    div{   
         opacity: 1;
         visibility: visible;
        }  
}
 
`
const PStyle = styled.p`
margin-top:30%;
color:${({colors}) => colors && `white`};
`
export const Project = (props) => {
    const colors = useColor();
    const {imgSrc,title,description} = props.project
    return(
        // <ProjectStyled Pic={imgSrc}>
        //     <Description>
        //         <ProjectTitle>
        //             {title}
        //         </ProjectTitle>
        //         <p>
        //             {description}
        //         </p>
        //     </Description>
        // </ProjectStyled>
        <DescriptionContainer >
            <img src={imgSrc} />
            <DescriptionWrapper>
                <PStyle colors={colors}>
                    <strong>{title}</strong>{description}
                </PStyle>
            </DescriptionWrapper>            
        </DescriptionContainer>
    )
}
import styled from "styled-components";
//try to use css pseudo like before and content for description
const ProjectStyled = styled.a`
display: block;
overflow: hidden;
height: 400px;
width:400px;
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
    margin-right:-1200px;
    z-index: 3;
    transition:0.5s;
    /*h3{
        text-align:left;
    }
    p{
        text-align:center;
    }*/
`

const ProjectTitle = styled.h3`
h3{
    text-align:left;
}
p{
    text-align:center;
}
`
export const Project = (props) => {
    const {imgSrc,title,description} = props.project
    return(
        <ProjectStyled Pic={imgSrc}>
            <Description>
                <ProjectTitle>
                    {title}
                </ProjectTitle>
                <p>
                    {description}
                </p>
            </Description>
        </ProjectStyled>
    )
}
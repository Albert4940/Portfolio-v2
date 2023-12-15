import styled from "styled-components";

const ButtonStyle = ({primaryWhite,secondary,thirdy}) => (styled.button`
    border:none;
    cursor:pointer;
      display: flex;
    align-items: center;
    margin:auto;
    padding: 1rem 2rem;
    border-radius: 2px;
    font-size: 2rem;
    color: ${primaryWhite};
    background: ${secondary};
    transition: background 0.3s ease-out;
    &:hover{
        background: ${thirdy};
        svg {
            transform: translateY(2px);
          }
    }
    `
)

export default ButtonStyle;
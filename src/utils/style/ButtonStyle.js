import styled from "styled-components";

const ButtonStyle = (colors) => (styled.button`
    border:none;
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 2px;
    font-size: 2rem;
    color: ${colors.primaryWhite};
    background: var(--main-gray);
    transition: background 0.3s ease-out;
    &:hover{
        background: var(--main-red);
    }
    `
)

export default ButtonStyle;
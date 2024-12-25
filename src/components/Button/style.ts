import styled from "styled-components";

export const Button = styled.button`
    border-radius: 8px;
    background-color: ${props => props.theme["red-500"]};
    color: ${props => props.theme.white};
    padding: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    border: 0;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: ${props => props.theme["red-300"]};
    }

    `

import styled from "styled-components";

export const Input = styled.input`
    padding: 1rem;
    border-radius: 8px;
    outline: none;
    margin-top: 0.2rem;
    border: 2px solid ${props => props.theme.white};
    background-color: ${props => props.theme["red-500"]};
    color: ${props => props.theme.white};
    &::placeholder{
        color: ${props => props.theme.white};
    }
    &:focus{
        border: 2px solid ${props => props.theme["red-300"]};
    }
`

export const Checkbox = styled.div`
    display: flex;
    margin-top: 1rem;
    gap: 0.2rem;
`
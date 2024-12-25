import styled from "styled-components";

export const LoginContent = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 100vh;
background-color: ${props => props.theme["red-700"]};
justify-content: center;
`

export const LoginSquare = styled.div`
border-radius: 8px;
padding: 2rem;
display: flex;
flex-direction: column;
background-color: ${props => props.theme.white};
align-items: center;
`
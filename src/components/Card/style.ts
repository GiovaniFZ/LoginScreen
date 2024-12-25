import styled from "styled-components";

export const Card = styled.div`
border-radius: 8px;
padding: 2rem;
display: flex;
flex-direction: column;
background-color: ${props => props.theme["gray-100"]};
align-items: center;
`
import styled from "styled-components";


export const ButtonStyled = styled.button`
    background: ${props => props.primary ? "#BF4F74" : "white"};
    color: ${props => props.primary ? "white" : "black"};
`
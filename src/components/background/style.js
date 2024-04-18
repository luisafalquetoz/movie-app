import styled from "styled-components"; 

export const BackgroundImage = styled.div `
    height: 100vh;
    background-image: url(${(props) => props?.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const BackgroundGradient = styled.div `
    background: linear-gradient(to top, #111 60%, transparent 100%);
`;
import styled from "styled-components";

export const StyledList = styled.section`
    padding: 20px;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    box-shadow: 0 0 2px 2px #999;
    list-style-type: none;
    flex-basis: 45%;

    @media(max-width: 767px){
        flex-basis: 100%;
    }
`;

export const StyledHeader = styled.h2`
    text-align: center;
`;

export const StyledParagraph = styled.p`
    text-align: center;
    font-size: 20px;
`;
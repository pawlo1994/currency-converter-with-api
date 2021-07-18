import styled, { css } from "styled-components";

export const StyledList = styled.section`
    padding: 20px;
    background-color: rgb(240, 240, 240);
    border-radius: 10px;
    box-shadow: 0 0 2px 2px #999;
    list-style-type: none;
    flex-basis: 45%;

    @media(max-width: 767px){
        margin-top: 10px;
        flex-basis: 100%;
    }
`;

export const StyledHeader = styled.h2`
    text-align: center;
    margin: 10px 0 0;
    font-size: 24px;
    font-weight: normal;
    background-color: #ddd;
    padding: 5px;
`;

export const StyledParagraph = styled.p`
    margin-top: 5px;
    padding: 5px;
    text-align: center;
    font-size: 20px;
    background-color: #ccc;

    ${({ updateDateText }) => updateDateText && css`
        font-size: 18px;
        margin-top: 0;
        background-color: #333;
        color: #fff;
    `}
    `;
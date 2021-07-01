import styled, { css } from "styled-components";

export const StyledList = styled.ul`
    padding: 20px;
    background-color: rgba(221, 221, 221, 0.507);
    border-radius: 10px;
    box-shadow: 0 0 2px 2px #999;
    list-style-type: none;
    flex-basis: 45%;

    @media(max-width: 767px){
        flex-basis: 100%;
    }
`;

export const StyledItem = styled.li`
    font-size: 24px;
`;

export const StyledSpan = styled.span`
    display: inline-block;
    background-color: rgba(204, 204, 204, 0.5);
    text-align: center;
    width: 100%;
    padding: 5px;

    ${({ currencyRate }) => currencyRate && css`
        background-color: ${({ theme }) => theme.color.mineShaft};
        color: #fff;
        margin-bottom: 10px;
    `};
`;
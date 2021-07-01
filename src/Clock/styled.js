import styled from "styled-components";

export const StyledClock = styled.p`
    font-size: 14px;
    font-family: 'PT mono', monospace;
    margin: 0 auto;
    padding: 5px 10px;
    text-align: right;

    @media(max-width: 280px)
    {
        font-size: 12px;
    }
`;
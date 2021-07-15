import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 20px;
    border-radius: 10px;
    flex-basis: 50%;
    background-color: #eee;
    box-shadow: 0 0 2px 2px #666;

    @media(max-width:767px){
        flex-basis: 100%;
    }
`;

export const StyledLabel = styled.label`
    display: inline-block;
    width: 30%;
    margin: 10px 5px;
    text-align: right;
`;

export const StyledInput = styled.input`
    display: inline-block;
    width: 60%;
    padding: 5px;
    border-radius: 5px;

    &:invalid{
        box-shadow: 0px 0px 2px 2px #c00;
    }
`;

export const StyledField = styled.p`
    margin: 5px auto;
    max-width: 360px;
    width: 100%;
`;

export const StyledButton = styled.button`
    display: block;
    font-size: 20px;
    width: 100px;
    padding: 10px;
    margin: 10px auto;
    background-color: ${({ theme }) => theme.color.mineShaft};
    color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #666;
    cursor: pointer;
    transition: 0.3s background-color;

    &:hover{
        background-color: #666;
    }

    &:active{
        background-color: #fff;
        color: ${({ theme }) => theme.mainColor};
    }
`;

export const StyledHeader = styled.h2`
    font-size: 28px;
    text-align: center;
    text-shadow: 0px 2px 2px #aaa;
`;
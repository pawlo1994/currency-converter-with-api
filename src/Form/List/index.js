import { StyledHeader, StyledList, StyledParagraph } from "./styled";

const List = ({ plnValue, result, date }) => {
    if (!result) {
        return (
            <StyledList>
                <StyledHeader>Data aktualizacji:</StyledHeader>
                <StyledParagraph updateDateText>{date}</StyledParagraph>
            </StyledList>
        )
    }
    return (
        <StyledList>
            <StyledHeader>Data aktualizacji:</StyledHeader>
            <StyledParagraph updateDateText>{date}</StyledParagraph>
            <StyledParagraph>
                {(+plnValue).toFixed(2)} PLN = {(+result.value).toFixed(2)} {result.currencyName}
            </StyledParagraph>
        </StyledList>
    );
};

export default List;
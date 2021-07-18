import { StyledHeader, StyledList, StyledParagraph } from "./styled";

const List = ({ plnValue, result, updateDate }) => {
    if (!result) {
        return (
            <StyledList>
                <StyledHeader>Data aktualizacji: {updateDate}</StyledHeader>
            </StyledList>
        )
    }
    return (
        <StyledList>
            <StyledHeader>Data aktualizacji: {updateDate}</StyledHeader>
            <StyledParagraph>
                {(+plnValue).toFixed(2)} PLN = {(+result.value).toFixed(2)} {result.currencyName}
            </StyledParagraph>
        </StyledList>
    );
};

export default List;
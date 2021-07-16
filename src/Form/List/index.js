import { StyledHeader, StyledList, StyledParagraph } from "./styled";

const List = ({ plnValue, result, updateDate, sourceValue }) => {
    return (
        <StyledList>
            <StyledHeader>Data aktualizacji: {updateDate}</StyledHeader>
            <StyledParagraph>
                {(+plnValue).toFixed(2)} {sourceValue} = {(+result.value).toFixed(2)} {result.currencyName}
            </StyledParagraph>
        </StyledList>
    );
};

export default List;
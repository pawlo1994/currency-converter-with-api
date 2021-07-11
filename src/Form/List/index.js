import { StyledList, StyledItem, StyledSpan } from "./styled";

const List = ({ currencyValue, plnValue, currencyName, result }) => {
    return (
        <StyledList>
            <StyledItem key="1">PLN:
                <StyledSpan>Wartość: {plnValue} PLN</StyledSpan>
            </StyledItem>
            <StyledItem key="2">
                {currencyName}:
                <StyledSpan currencyRate>Kurs: {currencyValue} PLN</StyledSpan>
                <StyledSpan>Wartość: {result} {currencyName}</StyledSpan>
            </StyledItem>
        </StyledList>
    );
};

export default List;
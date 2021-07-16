import { StyledList, StyledItem, StyledSpan } from "./styled";

const List = ({ plnValue, rates, result, currencyNameIndex, updateDate, sourceValue }) => {
    return (
        <>
            <p>Data aktualizacji: {updateDate}</p>
            <StyledList>
                <StyledItem key="1">{sourceValue}:
                    <StyledSpan>Wartość: {(+plnValue).toFixed(2)} {sourceValue}</StyledSpan>
                </StyledItem>
                <StyledItem key="2">
                    {rates[currencyNameIndex]}:
                    <StyledSpan>Wartość: {(+result).toFixed(2)} {rates[currencyNameIndex]}</StyledSpan>
                </StyledItem>
            </StyledList>
        </>
    );
};

export default List;
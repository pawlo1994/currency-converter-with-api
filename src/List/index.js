import { StyledList, StyledItem, StyledSpan } from "./styled";

const List = ({ currencies, plnValue }) => {
    return (
        <StyledList>
            <StyledItem>PLN:
                <StyledSpan>Wartość: {plnValue} PLN</StyledSpan>
            </StyledItem>
            {currencies.map(currency => (
                <StyledItem
                    key={currency.id}
                >
                    {currency.name}:
                    <StyledSpan currencyRate>Kurs: {currency.value} PLN</StyledSpan>
                    <StyledSpan>Wartość: {currency.result} {currency.name}</StyledSpan>
                </StyledItem>
            ))}
        </StyledList>
    );
};

export default List;
import { StyledList, StyledItem, StyledSpan } from "./styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const List = ({ currencies, plnValue }) => {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
};

export default List;
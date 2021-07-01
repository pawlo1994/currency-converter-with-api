import { StyledForm, StyledLabel, StyledInput, StyledField, StyledButton, StyledHeader } from "./styled";
import { useState } from "react";
import List from "../List";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const Form = ({ currencies }) => {
    let results;
    const [userValue, setUserValue] = useState("");
    const [plnValue, setPlnValue] = useState("");

    const onFormSubmit = event => {
        event.preventDefault();
        results = currencies.map(({ result, value }) => result = (userValue / value).toFixed(2));
        for (let i = 0; i <= 2; i++) {
            currencies[i].result = results[i];
        };
        setPlnValue((+userValue).toFixed(2));
        setUserValue("");
    };

    return (
        <ThemeProvider theme={theme}>
            <StyledForm
                onSubmit={onFormSubmit}
            >
                <StyledHeader>Przelicznik walut</StyledHeader>
                Pola oznaczone "*" są wymagane
                <StyledField>
                    <StyledLabel htmlFor="pln">PLN*:</StyledLabel>
                    <StyledInput
                        type="number"
                        value={userValue}
                        onChange={({ target }) => setUserValue(target.value)}
                        name="pln"
                        id="pln"
                        step="0.01"
                        min="0.05"
                        max="9999999999"
                        required
                    />
                </StyledField>
                <StyledButton>Przelicz</StyledButton>
            </StyledForm>
            <List
                currencies={currencies}
                results={results}
                plnValue={plnValue}
            />
        </ThemeProvider>
    );
};

export default Form;

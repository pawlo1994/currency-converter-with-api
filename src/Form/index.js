import { StyledForm, StyledLabel, StyledInput, StyledField, StyledButton, StyledHeader } from "./styled";
import { useState } from "react";
import { useFetchedData } from "./useFetchedData";
import List from "./List";

const Form = () => {

    const currencies = useFetchedData();
    const [plnValue, setPlnValue] = useState("");
    const [userValue, setUserValue] = useState("");
    const [currencyName, setCurrencyName] = useState("AED");

    const currencyNameIndex = currencies.names.findIndex(name => name === currencyName);
    const rate = currencies.values[currencyNameIndex];

    const [result, setResult] = useState("");

    const calculateResult = (currencyName, rate) => {
        setResult(
            {
                value: userValue * rate,
                currencyName
            }
        );
    };

    const onFormSubmit = event => {
        event.preventDefault();
        setPlnValue((+userValue).toFixed(2));
        calculateResult(currencyName, rate);
        setUserValue("");
    };

    if (currencies.status === "loading") {
        return (
            <>
                <StyledHeader>Proszę czekać, trwa pobieranie danych z serwera...</StyledHeader>
            </>
        )
    }
    if (currencies.status === "failed") {
        return (
            <>
                <StyledHeader>Nie udało się pobrać danych, spróbuj ponownie później</StyledHeader>
            </>
        )
    }
    return (
        <>
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
                    <StyledLabel htmlFor="currency">Waluta:</StyledLabel>
                    <StyledInput
                        as="select"
                        onChange={
                            ({ target }) => {
                                setCurrencyName(target.value);
                            }
                        }
                    >
                        {currencies.names.map((rate, id) => {
                            return (
                                <option
                                    key={id}
                                    value={rate}>
                                    {rate}
                                </option>
                            )
                        })}
                    </StyledInput>
                </StyledField>
                <StyledButton>Przelicz</StyledButton>
            </StyledForm>
            <List
                plnValue={plnValue}
                result={result}
                updateDate={currencies.updateDate}
            />
        </>
    );
};

export default Form;

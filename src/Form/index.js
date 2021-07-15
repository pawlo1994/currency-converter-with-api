import { StyledForm, StyledLabel, StyledInput, StyledField, StyledButton, StyledHeader } from "./styled";
import { useState } from "react";
import List from "./List";

let selectString;
fetch("https://api.exchangerate.host/latest?base=PLN")
    .then(response => response.json())
    .then(console.log("Pobieranie danych..."))
    .then(currency => {
        setTimeout(() => {
            console.log(`Waluta bazowa: ${currency.base}`);
            console.log(`Data aktualizacji: ${currency.date}`);
            for (const [key, value] of (Object.entries(currency.rates))) {
                console.log(`${(value).toFixed(2)} ${key}`);
                selectString += `<option value=${value}>${key}</option>`;
            }
        }, 1000);
    }
    )
    .catch(error => console.error("Nie udało się pobrać danych...", error));

const Form = ({ currencies }) => {

    const initialValue = 0;

    const [plnValue, setPlnValue] = useState(initialValue.toFixed(2));
    const [userValue, setUserValue] = useState("");
    const [currencyValue, setCurrencyValue] = useState(currencies[0].value);

    const currencyNameIndex = currencies.findIndex(({ value }) => value === +currencyValue);
    const currencyName = currencies[currencyNameIndex].name;

    const [result, setResult] = useState(plnValue);

    const onFormSubmit = event => {
        event.preventDefault();
        setPlnValue((+userValue).toFixed(2));
        setResult((userValue / currencyValue).toFixed(2));
        setUserValue("");
    };

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
                                setCurrencyValue(target.value);
                                setPlnValue(initialValue.toFixed(2));
                                setResult(initialValue.toFixed(2));
                            }
                        }
                    >
                        {(currencies.map(({ name, value, id }) => {
                            return (
                                <option
                                    key={id}
                                    value={value}>
                                    {name}
                                </option>
                            )
                        }))}
                    </StyledInput>
                </StyledField>
                <StyledButton>Przelicz</StyledButton>
            </StyledForm>
            <List
                userValue={userValue}
                plnValue={plnValue}
                currencyValue={currencyValue}
                currencyName={currencyName}
                result={result}
            />
        </>
    );
};

export default Form;

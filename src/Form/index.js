import { StyledForm, StyledLabel, StyledInput, StyledField, StyledButton, StyledHeader } from "./styled";
import { useEffect, useState } from "react";
import List from "./List";

const Form = ({ currencies }) => {
    const [updateDate, setUpdateDate] = useState("");
    const [sourceValue, setSourceValue] = useState("");
    const [rates, setRates] = useState([]);
    const [values, setValues] = useState([]);
    useEffect(() => {
        fetch("https://api.exchangerate.host/latest?base=PLN")
            .then(response => response.json())
            .then(console.log("Pobieranie danych..."))
            .then(currency => {
                setTimeout(() => {
                    setRates(Object.keys(currency.rates));
                    setValues(Object.values(currency.rates));
                    setUpdateDate(currency.date);
                    setSourceValue(currency.base);
                }, 1000);
            }
            )
            .catch(error => console.error("Nie udało się pobrać danych...", error))
    }, []);


    const [plnValue, setPlnValue] = useState("");
    const [userValue, setUserValue] = useState("");
    const [currencyValue, setCurrencyValue] = useState(values[0]);

    const currencyNameIndex = rates.findIndex(({ value }) => value === +currencyValue);
    const currencyName = rates[currencyNameIndex];

    const [result, setResult] = useState("");

    const calculateResult = () => {
        const currency = rates.find(({ name }) => name === currencyName).value;
        setResult(userValue / rate);
    };

    const onFormSubmit = event => {
        event.preventDefault();
        setPlnValue((+userValue).toFixed(2));
        calculateResult();
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
                                setPlnValue("");
                                setResult("");
                            }
                        }
                    >
                        {rates.map((rate, id) => {
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
                sourceValue={sourceValue}
                currencyNameIndex={currencyNameIndex}
                result={result}
                rates={rates}
                updateDate={updateDate}
            />
        </>
    );
};

export default Form;

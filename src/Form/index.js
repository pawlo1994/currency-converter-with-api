import { StyledForm, StyledLabel, StyledInput, StyledField, StyledButton, StyledHeader } from "./styled";
import { useEffect, useState } from "react";
import List from "./List";

const Form = () => {
    const [updateDate, setUpdateDate] = useState("");
    const [sourceValue, setSourceValue] = useState("");
    const [rates, setRates] = useState([]);
    const [values, setValues] = useState([]);
    useEffect(() => {
        fetch("https://api.exchangerate.host/latest?base=PLN")
            .then(response => response.json())
            .then(currency => {
                setTimeout(() => {
                    setRates(Object.keys(currency.rates));
                    setValues(Object.values(currency.rates));
                    setUpdateDate(currency.date);
                    setSourceValue(currency.base);
                }, 1000);
            }
            )
            .catch(error => {
                console.error("Nie udało się pobrać danych...", error)
            })
    }, []);


    const [plnValue, setPlnValue] = useState("");
    const [userValue, setUserValue] = useState("");
    const [currencyValue, setCurrencyValue] = useState(rates[0]);

    const currencyName = rates.find(rate => rate === currencyValue);
    const currencyNameIndex = rates.findIndex(name => name === currencyName);
    const rate = values[currencyNameIndex];

    const [result, setResult] = useState(
        {
            value: userValue * rate,
            currencyName
        }
    );

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

    try {
        if (!updateDate) {
            throw "Nie udało się pobrać danych z serwera. Spróbuj ponownie później";
        }
    }
    catch (error) {
        return (<StyledHeader>Pobieranie danych z serwera. Proszę czekać...</StyledHeader>)
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
                                setCurrencyValue(target.value);
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
                result={result}
                updateDate={updateDate}
            />
        </>
    );
};

export default Form;

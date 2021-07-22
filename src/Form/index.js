import { StyledForm, StyledLabel, StyledInput, StyledField, StyledButton, StyledHeader } from "./styled";
import { useState } from "react";
import { useFetchedData } from "./useFetchedData";
import List from "./List";

const Form = () => {

    const currenciesData = useFetchedData();

    const [plnValue, setPlnValue] = useState("");
    const [userValue, setUserValue] = useState("");
    const [currencyName, setCurrencyName] = useState("EUR");

    const [result, setResult] = useState("");

    const calculateResult = (currencyName) => {
        const currencyNameIndex = currenciesData.names.findIndex(name => name === currencyName);
        const rate = currenciesData.values[currencyNameIndex];
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
        calculateResult(currencyName);
        setUserValue("");
    };

    return (currenciesData.status === "loading" ?
        <StyledHeader>Proszę czekać, trwa pobieranie danych z serwera...</StyledHeader>
        :
        currenciesData.status === "failed" ?
            <StyledHeader>Nie udało się pobrać danych, spróbuj ponownie później</StyledHeader>
            :
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
                            defaultValue={currencyName}
                            onChange={
                                ({ target }) => {
                                    setCurrencyName(target.value);
                                }
                            }
                        >
                            {currenciesData.names.map((name, id) => {
                                return (
                                    <option
                                        key={id}
                                        value={name}>
                                        {name}
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
                    date={currenciesData.date}
                />
            </>
    );
};

export default Form;

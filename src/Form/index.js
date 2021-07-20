import { StyledForm, StyledLabel, StyledInput, StyledField, StyledButton, StyledHeader } from "./styled";
import { useEffect, useState } from "react";
import { useFetchedData } from "./useFetchedData";
import List from "./List";

const Form = () => {

    const {
        names,
        values,
        status,
        updateDate
    } = useFetchedData();

    const [plnValue, setPlnValue] = useState("");
    const [userValue, setUserValue] = useState("");
    const [currencyName, setCurrencyName] = useState("");
    const currencyNameIndex = names.findIndex(name => name === currencyName);
    const rate = values[currencyNameIndex];

    useEffect(() => {
        if (currencyNameIndex === -1) {
            setCurrencyName(names => names[currencyNameIndex + 1])
        }
    }, [currencyNameIndex]);

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

    if (status === "loading") {
        return (
            <>
                <StyledHeader>Proszę czekać, trwa pobieranie danych z serwera...</StyledHeader>
            </>
        )
    }
    if (status === "failed") {
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
                        {names.map((name, id) => {
                            if (id === 0) {
                                return (
                                    <option
                                        key={id}
                                        value={name}
                                        selected>
                                        {name}
                                    </option>
                                )
                            }
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
                updateDate={updateDate}
            />
        </>
    );
};

export default Form;

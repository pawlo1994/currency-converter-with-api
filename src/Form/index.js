import { StyledForm, StyledLabel, StyledInput, StyledField, StyledButton, StyledHeader } from "./styled";
import { useState, useRef } from "react";
import List from "./List";

const Form = ({ currencies }) => {
    const initialValue = 0;
    const inputRef = useRef(null);

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
        inputRef.current.focus();
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
                        ref={inputRef}
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
                        {currencies.map(({ name, value, id }) => {
                            return (
                                <option
                                    value={value}
                                    key={id}
                                >
                                    {name}
                                </option>
                            )
                        }
                        )};
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

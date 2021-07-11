import { StyledForm, StyledLabel, StyledInput, StyledField, StyledButton, StyledHeader } from "./styled";
import { useState } from "react";
import List from "./List";

const Form = ({ currencies }) => {
    const initialValue = 0;
    const [plnValue, setPlnValue] = useState(initialValue.toFixed(2));
    const [userValue, setUserValue] = useState("");
    const [currencyValue, setCurrencyValue] = useState(currencies[0].value);
    const [currencyName, setCurrencyName] = useState(currencies[0].name);
    const [result, setResult] = useState(initialValue.toFixed(2));
    const onFormSubmit = event => {
        setPlnValue((+userValue).toFixed(2));
        event.preventDefault();
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
                                setPlnValue((+userValue).toFixed(2));
                                setResult((+userValue).toFixed(2));
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

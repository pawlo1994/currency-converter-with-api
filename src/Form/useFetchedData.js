import { useState } from "react";

export const useFetchedData = () => {
    const [updateDate, setUpdateDate] = useState("");
    const [names, setNames] = useState([]);
    const [values, setValues] = useState([]);
    const [status, setStatus] = useState("loading");

    const getCurrenciesData = () => {
        fetch("https://api.exchangerate.host/latest?base=PLN")
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(response => {
                setNames(Object.keys(response.rates));
                setValues(Object.values(response.rates));
                setUpdateDate(response.date);
                setStatus("done");
            }
            )
            .catch(error => {
                console.error("BŁĄD!!!", error)
                setStatus("failed");
            })
    };

    setTimeout(getCurrenciesData, 2000);

    return { names, values, updateDate, status };
};
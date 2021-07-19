import { useState, useEffect } from "react";

export const useFetchedData = () => {
    const [updateDate, setUpdateDate] = useState("");
    const [names, setNames] = useState([]);
    const [values, setValues] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        fetch("https://api.exchangerate.host/latest?base=PLN")
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(currency => {
                setTimeout(() => {
                    setNames(Object.keys(currency.rates));
                    setValues(Object.values(currency.rates));
                    setUpdateDate(currency.date);
                    setStatus("done");
                }, 2000);
            }
            )
            .catch(error => {
                console.error("BŁĄD!!!", error)
                setStatus("failed");
            })
    }, []);
    return { names, values, updateDate, status };
};
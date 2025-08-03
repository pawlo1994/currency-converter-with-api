import { useEffect, useState } from "react";

export const useFetchedData = () => {
    const [currenciesData, setCurrenciesData] = useState({
        status: "loading",
    });
    const dataURL = "https://api.exchangerate.host/live?source=PLN&access_key=7b87135daebe4d4593a1056662bcd10d";

    const getCurrenciesData = () => {
        fetch(dataURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(response => {
                setCurrenciesData({
                    date: response.date,
                    names: Object.keys(response.quotes),
                    values: Object.values(response.quotes),
                    status: "done",
                });
            })
            .catch(error => {
                console.error("BŁĄD!!!", error);
                setCurrenciesData({
                    status: "failed",
                })
            });
    };

    useEffect(() => {
        setTimeout(getCurrenciesData, 2000);
    }, []);

    return currenciesData;
};
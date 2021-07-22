import { useEffect, useState } from "react";

export const useFetchedData = () => {
    const [currenciesData, setCurrenciesData] = useState({
        status: "loading",
    });
    const dataURL = "https://api.exchangerate.host/latest?base=PLN";

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
                    names: Object.keys(response.rates),
                    values: Object.values(response.rates),
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
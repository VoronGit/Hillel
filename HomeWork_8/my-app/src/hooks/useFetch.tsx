import { useEffect, useState, useCallback } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const getData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url);

            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);

            const json = await response.json();
            setData(json);
        } catch (error) {
            setError(
                "There was a problem with the fetch operation: " + error
            );
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getData()
    }, [getData]);

    return {data, error, isLoading, refetch: getData};
};

export default useFetch;

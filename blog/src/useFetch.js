import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const abortCont = new AbortController();

    useEffect(() => {
        console.log("useEffect ran");
        fetch(url, { signal: abortCont.signal })
            .then(resp => {
                if (!resp.ok)
                    throw new Error("Could not fetch :(");
                return resp.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                console.log(data);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                setData(null);
            })

        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
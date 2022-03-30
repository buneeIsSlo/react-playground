import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        console.log("useEffect ran");
        fetch(url)
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

    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
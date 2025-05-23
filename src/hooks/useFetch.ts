import { useState, useCallback } from 'react';

interface FetchOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
}

interface UseFetchResult<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
    run: (url: string, options?: FetchOptions) => Promise<void>;
}


function useFetch<T = any>(): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const run = useCallback(async (url: string, ) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            console.error(err);
            
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    }, []);

    return { data, error, loading, run };
}

export default useFetch;
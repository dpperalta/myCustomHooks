import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setstate] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setstate({data: null, loading: true, error: null});
        fetch(url)
            .then(res => res.json())
                .then( data => {

                    if(isMounted.current){
                        setstate({
                            loading: false,
                            error: null,
                            data
                        });
                    }else{
                        console.log('No es seguro cambiar el state');
                    }
                });
    }, [url]);

    return state;
}

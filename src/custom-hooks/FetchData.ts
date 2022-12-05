import React, { useState, useEffect } from 'react';
import { myServerCalls } from '../api';


export const useGetData = () => {
    const [characterData, setData] = useState<any>([]);

    async function handleDataFetch() {
        const result = await myServerCalls.get()
        setData(result)
    }

    useEffect(() => {
        handleDataFetch();
    }, [])

    return {characterData, getData: handleDataFetch}
}


import { useState, useEffect } from "react";
import axios from "axios";
import {API_KEY, API_URL} from '@env'


const fetchApi = (endpoint, query) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_URL
        },
        params: {
            ...query
        }
    };

    const fetchData = async() => {
        setIsLoading(true);

        try{
            const res = await axios.request
            (options);

            setData(res.data.data);
            setIsLoading(false)
        } catch(error) {
            setError(error);
            alert("Ada kesalahan pada sistem, Mohon tunggu sebentar")
        }finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchData();
    }, [])

    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, reFetch};
};

export default fetchApi;
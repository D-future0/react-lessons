import { useState, useEffect } from 'react';

export const useFetch = (url)=>{
    const [loading, setLoading] = useState(true)
    const [meals, setMeals] = useState([])

    const getProducts = async (url) => {
        const response = await fetch(url);
        const products = await response.json();
        setMeals(products);
        setLoading(false);
      };
    useEffect(()=>{
        getProducts(url)
    }, [url])
return{loading, meals}
}




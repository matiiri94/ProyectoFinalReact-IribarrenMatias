import { useState, useEffect } from "react";
import { getProducts } from "../services";

/**
 * @description custom hook for get products
 * @returns {Array}
 */

export const useGetProducts = (limit = 30) => {
    const [productsData, setProductsData] = useState([]); 
  
    useEffect(() => {
        getProducts(limit)
        .then((response) => {
           setProductsData(response.data.products);
           console.log(productsData); 
        })
        .catch((error) => {
           console.log(error);
        });
      }, []);

      return { productsData }
}
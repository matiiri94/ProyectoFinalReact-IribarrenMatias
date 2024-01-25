import axios from "axios";


/**
 * @name getProducts
 * @description get products from dummyjson API
 * @param {number} limit 
 * @returns {Promise}
 */
export async function getProducts(limit = 10) {
 return await axios.get(`https://dummyjson.com/products?limit=${limit}`)   

}
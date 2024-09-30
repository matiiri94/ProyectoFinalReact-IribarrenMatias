import axios from "axios";


/**
 * @name getProducts
 * @description get products from dummyjson API
 * @param {number} limit 
 * @returns {Promise}
 */
export async function getProducts(limit = 30) {
 return await axios.get('https://dummyjson.com/products/category/smartphones')   

}
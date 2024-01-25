import ItemListContainer from '../Componentes/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';
import { useEffect } from 'react';

export const Home = () => {

    useEffect(() => {
        document.title = "Tienda De Mascotas = Home"
    })
    
    const {productsData} = useGetProducts(15);


    return (
        <ItemListContainer productsData={productsData} />

    )

}
import ItemListContainer from '../Components/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';
import { useEffect } from 'react';

export const Home = () => {

    useEffect(() => {
        document.title = "TIENDA LA NAVE = Home"
    },[])
    
    const {productsData} = useGetProducts(15);


    return (
        <div classname="contenedor">
            <ItemListContainer productsData={productsData} />
        </div>
    )

}
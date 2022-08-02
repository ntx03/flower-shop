import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardServises } from "../../utils/constantsServicesPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Services() {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Услуги'} children={
                <>
                    {productCardServises.map((item) => {
                        return (<ProductCard image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} />)
                    })}
                </>
            } />
        </>
    );
}

export default Services;
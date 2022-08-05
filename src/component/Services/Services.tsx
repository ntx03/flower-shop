import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardServises } from "../../utils/constantsServicesPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Services({ path }) {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Услуги'} children={
                <>
                    {productCardServises.map((item) => {
                        return (<ProductCard path={path} image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} id={item.id} key={item.id} />)
                    })}
                </>
            } />
        </>
    );
}

export default Services;
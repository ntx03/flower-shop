import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardTort } from "../../utils/constantsSweetsPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Sweets() {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Сладости'} children={
                <>
                    {productCardTort.map((item) => {
                        return (<ProductCard image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} id={item.id} key={item.id} />)
                    })}
                </>
            } />
        </>
    );
}

export default Sweets;
import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardAccessories } from "../../utils/constantsAccessoriesPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Accessories() {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Аксессуары'} children={
                <>
                    {productCardAccessories.map((item) => {
                        return (<ProductCard image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} />)
                    })}
                </>
            } />
        </>
    );
}

export default Accessories;
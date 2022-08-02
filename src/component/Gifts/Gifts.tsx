import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardGifts } from "../../utils/constantsGiftsPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Gifts() {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Подарки'} children={
                <>
                    {productCardGifts.map((item) => {
                        return (<ProductCard image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} />)
                    })}
                </>
            } />
        </>
    );
}

export default Gifts;
import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardFrut } from "../../utils/constantsFrutsPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function FrutsBasket() {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Фруктовые корзины'} children={
                <>
                    {productCardFrut.map((item) => {
                        return (<ProductCard image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} />)
                    })}
                </>
            } />
        </>
    );
}

export default FrutsBasket;
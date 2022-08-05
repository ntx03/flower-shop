import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardFrut } from "../../utils/constantsFrutsPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function FrutsBasket({ path }) {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Фруктовые корзины'} children={
                <>
                    {productCardFrut.map((item) => {
                        return (<ProductCard path={path} image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} id={item.id} key={item.id} />)
                    })}
                </>
            } />
        </>
    );
}

export default FrutsBasket;
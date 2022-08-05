import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardGifts } from "../../utils/constantsGiftsPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Gifts({ path }) {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Подарки'} children={
                <>
                    {productCardGifts.map((item) => {
                        return (<ProductCard path={path} image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} id={item.id} key={item.id} />)
                    })}
                </>
            } />
        </>
    );
}

export default Gifts;
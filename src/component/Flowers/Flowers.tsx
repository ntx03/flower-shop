import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import './Flowers.scss';
import { productCard } from "../../utils/constantsFlowersPage";
//import icon_home from '../../img/home_icon.svg';
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Flowers() {

    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Цветы'} children={
                <>
                    {productCard.map((item) => {
                        return (<ProductCard image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} id={item.id} key={item.id} />)
                    })}
                </>
            } />
        </>
    );
}

export default Flowers;
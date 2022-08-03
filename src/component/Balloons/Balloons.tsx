import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardBalloons } from "../../utils/constantsBalloonsPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Balloons() {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Воздушные шары'} children={
                <>
                    {productCardBalloons.map((item) => {
                        return (<ProductCard image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} id={item.id} key={item.id} />)
                    })}
                </>
            } />
        </>
    );
}

export default Balloons;
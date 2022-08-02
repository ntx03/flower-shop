import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardPlants } from "../../utils/constantsPlantsPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function RoomPlants() {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Комнатные растения'} children={
                <>
                    {productCardPlants.map((item) => {
                        return (<ProductCard image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} />)
                    })}
                </>
            } />
        </>
    );
}

export default RoomPlants;
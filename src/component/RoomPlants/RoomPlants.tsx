import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardPlants } from "../../utils/constantsPlantsPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function RoomPlants({ path }) {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Комнатные растения'} children={
                <>
                    {productCardPlants.map((item) => {
                        return (<ProductCard path={path} image={item.image} text={item.text} price={item.price} priseOld={item.priseOld} id={item.id} key={item.id} />)
                    })}
                </>
            } />
        </>
    );
}

export default RoomPlants;
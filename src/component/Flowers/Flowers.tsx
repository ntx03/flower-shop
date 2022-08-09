import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import './Flowers.scss';
import { productCard } from "../../utils/constantsFlowersPage";
//import icon_home from '../../img/home_icon.svg';
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Flowers({ path }) {

    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Цветы'} children={
                <>
                    {productCard.map((item) => {
                        return (<ProductCard width={item.width} height={item.height} path={path} image={item.image} image2={item.image2} image3={item.image3} text={item.text} minProduct={item.minProduct} color={item.color} reviews={item.reviews} otherServices={item.otherServices} price={item.price} priseOld={item.priseOld} id={item.id} key={item.id} />)
                    })}
                </>
            } />
        </>
    );
}

export default Flowers;
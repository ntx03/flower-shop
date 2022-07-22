import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import './Flowers.scss';
import flowers from '../../img/flowers.svg';
import icon_home from '../../img/home_icon.svg';
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Flowers({ openNavigation }) {
    return (
        <>
            <Header openNavigation={openNavigation} />
            <ProductContainer nameNavigation={'Цветы'} children={
                <>
                    <ProductCard image={flowers} text={'корзина фиолетовых роз'} price={'1500 ₽'} priseOld={'2500 ₽'} />
                    <ProductCard image={flowers} text={'корзина фиолетовых роз'} price={'1500 ₽'} priseOld={'2500 ₽'} />
                    <ProductCard image={flowers} text={'корзина фиолетовых роз'} price={'1500 ₽'} priseOld={'2500 ₽'} />
                    <ProductCard image={flowers} text={'корзина фиолетовых роз'} price={'1500 ₽'} priseOld={'2500 ₽'} />
                    <ProductCard image={flowers} text={'корзина фиолетовых роз'} price={'1500 ₽'} priseOld={'2500 ₽'} />
                </>
            } />
        </>
    );
}

export default Flowers;
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
                    {productCardGifts.map((item, index) => {
                        return (<ProductCard width={item.width}
                            height={item.height}
                            path={path}
                            image={item.image}
                            image2={item.image2}
                            image3={item.image3}
                            text={item.text}
                            minProduct={item.minProduct}
                            color={item.color}
                            reviews={item.reviews}
                            otherServices={item.otherServices}
                            price={item.price}
                            priseOld={item.priseOld}
                            id={item.id}
                            key={index} />)
                    })}
                </>
            } />
        </>
    );
}

export default Gifts;
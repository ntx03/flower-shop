import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import '../Flowers/Flowers.scss';
import { productCardServises } from "../../utils/constantsServicesPage";
import ProductContainer from "../ProdictContainer/ProdictContainer";

function Services({ path }) {
    return (
        <>
            <Header />
            <ProductContainer nameNavigation={'Услуги'} children={
                <>
                    {productCardServises.map((item, index) => {
                        return (<ProductCard
                            width={item.width}
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

export default Services;
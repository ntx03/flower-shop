import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/PoductCard";
import './ProductContainer.scss';

import icon_home from '../../img/home_icon.svg';

function ProductContainer({ nameNavigation, children }) {
    return (

        <section className="flowers">
            <div className="flowers__navigavion-container">
                <img className="flowers__navigavion-image" src={icon_home} alt='иконка домик' />
                <p className="flowers__navigavion-text">{`/ ${nameNavigation}`}</p>
            </div>
            <div className="flowers__container">
                {children}
            </div>
        </section>

    );
}

export default ProductContainer;
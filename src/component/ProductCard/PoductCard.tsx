import React from "react";
import '../ProductCard/ProductCard.scss';

function ProductCard({ image, text, price, priseOld }) {
    return (
        <div className="card">
            <div className="card__image-container">
                <img className='card__image' src={image} alt="букет цветов" />
            </div>
            <h3 className='card__title'>{text}</h3>
            <div className="card__price-container">
                <p className="card__price">{price}</p>
                <p className="card__price card__price_gray">{priseOld}</p>
            </div>
            <button className="card__button">Заказать</button>
        </div>
    );
}

export default ProductCard;
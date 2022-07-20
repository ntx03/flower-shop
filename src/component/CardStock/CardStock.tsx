import React from "react";
import '../Main/Main.scss';

function CardStock(props) {
    return (
        <div className="main__stock-card">
            <div className="main__stock-card-image-container">
                <img className='main__stock-card-image' src={props.image} alt="букет цветов" />
            </div>
            <h3 className='main__stock-card-title'>{props.text}</h3>
            <div className="main__stock-card-price-container">
                <p className="main__stock-card-price">{props.price}</p>
                <p className="main__stock-card-price_gray">{props.priseOld}</p>
            </div>
            <button className="main__stock-card-button">Добавить в корзину</button>
        </div>
    );
}

export default CardStock; 
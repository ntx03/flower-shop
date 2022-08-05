import React from "react";

import '../ProductCard/ProductCard.scss';
import { basketCard } from '../../utils/constantsBasketPage';
import { useNavigate, useParams } from 'react-router-dom';

function ProductCard({ image, text, price, priseOld, id, path }) {
    const [order, setOrder] = React.useState(false);

    React.useEffect(() => {
        basketCard.forEach((i) => {
            if (i.id === id) {
                setOrder(true);
            }
        })
    })

    function addBasket() {
        basketCard.push({
            image: image,
            text: text,
            price: price,
            width: '60 см',
            heigth: '40 см',
            id: id,
        })
        setOrder(true);
    }

    function removeBasket() {
        const item = basketCard.find(item => item.id === id);
        const object = basketCard.indexOf(item);
        if (object !== -1) {
            basketCard.splice(object, 1);
            setOrder(false);
        } else alert('Error');
    }

    const navigate = useNavigate();


    // времянка
    function getOrder() {
        navigate(`${path}/${id}`);
    }

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
            <button className={order ? "card__button card__button-order" : "card__button"} onClick={getOrder}>Заказать</button>
        </div>
    );
}

export default ProductCard;
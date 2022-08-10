import React from "react";
import '../ProductCard/ProductCard.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../src/hooks';
import { setPopupCardState } from '../../store/productCardState';


function ProductCard({ width, height, image, text, price, priseOld, id, path, image2, image3, minProduct, color, otherServices, reviews }) {
    const [order, setOrder] = React.useState(false);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    // времянка
    function getOrder() {
        const allProps = {
            path: path,
            image: image,
            image2: image2,
            image3: image3,
            width: width,
            height: height,
            price: price,
            priceOld: priseOld,
            id: id,
            minProduct: minProduct,
            color: color,
            reviews: reviews,
            otherServices: otherServices,
            text: text
        }

        dispatch(setPopupCardState(allProps))
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
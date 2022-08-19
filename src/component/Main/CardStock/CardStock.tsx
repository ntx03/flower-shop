import React from "react";
import '../Main.scss';
import { useAppDispatch } from '../../../../src/hooks';
import { setBasketState } from '../../../store/basketStateSlise';

function CardStock(props) {

    // берем данные товара, который выбрал покупатель
    //const popupCardState = useAppSelector(state => state.product.popupCardState);
    const dispatch = useAppDispatch();

    function addBasket() {
        interface data {
            image: string,
            image2?: undefined,
            image3?: undefined,
            width: number,
            height: number,
            price: number,
            id: number,
            color?: string,
            text: string,
            priceOtherServices?: number,
            minProduct: undefined,
            reviews: undefined,
            otherServices: undefined,
            path: null,
            counter: number,
        }

        // eslint-disable-next-line @typescript-eslint/no-redeclare
        const data: data = {
            image: props.image,
            image2: undefined,
            image3: undefined,
            width: props.width,
            height: props.height,
            price: props.price,
            id: Math.round(Math.random() * 100000),
            color: undefined,
            text: props.text,
            priceOtherServices: undefined,
            minProduct: undefined,
            reviews: undefined,
            otherServices: undefined,
            path: null,
            counter: 1,
        }
        dispatch(setBasketState(data));
    }

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
            <button className="main__stock-card-button" onClick={addBasket}>Добавить в корзину</button>
        </div>
    );
}

export default CardStock; 
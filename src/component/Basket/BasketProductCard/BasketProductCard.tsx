import React from "react";
import arrow_height from '../../../img/arrow_height.svg';
import arrow_width from '../../../img/arrow_width.svg';
import wastebasket from '../../../img/wastebasket.svg';
import { useAppSelector, useAppDispatch } from '../../../../src/hooks';
import { removeOrderBasket, changeCounterState } from '../../../store/basketStateSlise';
import './BasketProductCard.scss';

function BasketProductCard({ image, text, width, height, price, id, summOrder, setSummOrder, counterState }) {
    const dispatch = useAppDispatch();
    // берем данные товара, который выбрал покупатель
    const basketState = useAppSelector(state => state.basket.basketState);

    // счтечик количества товаров
    const [counter, SetCounter] = React.useState(counterState);

    const objectCounterSumm = {
        id: id,
        counter: counter + 1
    }

    const objectCounterMinus = {
        id: id,
        counter: counter < 2 ? counter : counter - 1
    }
    // меняем цену в зависимости от состояния counter
    function changeCounter(e) {

        if (counter < e.target.value) {
            setSummOrder(summOrder + price * Number(e.target.value) - price)
        } else if (counter > e.target.value) { setSummOrder(summOrder - price * Number(e.target.value)) }
        if (e.target.value > 50) {
            SetCounter(50);
            setSummOrder(summOrder + price * 50)
        } else if (e.target.value <= 0) {
            SetCounter(0);
            setSummOrder(summOrder + price * 0)
        } else {
            SetCounter(Number(e.target.value));
            setSummOrder(summOrder + price * Number(e.target.value) - price)
        }
    }
    // довабляем количество товаров
    function moreOrder() {
        if (counter >= 50) {
            SetCounter(50);
            dispatch(changeCounterState(objectCounterSumm))
        } else {
            setSummOrder(summOrder + price)
            SetCounter(counter + 1);
            dispatch(changeCounterState(objectCounterSumm))
        }
    }
    // уменьшаем количество товаров
    function lessOrder() {
        if (counter <= 1) {
            SetCounter(1)
            dispatch(changeCounterState(objectCounterMinus))
        } else {
            setSummOrder(summOrder - price)
            SetCounter(counter - 1);
            dispatch(changeCounterState(objectCounterMinus))
        }
    }

    // удаляем товар
    function deleteProduct() {
        const item = basketState.find(item => item.id === id);
        console.log(item);
        const object = basketState.indexOf(item);
        console.log(object);
        if (object !== -1) {
            dispatch(removeOrderBasket(object));
        } else alert('Error');
    }

    return (
        <div className="basket__wrapper">
            <div className='basket__products'>
                <div className='basket__products-container'>
                    <img src={image} alt='букет цветов' className='basket__product-image' />
                    <div className='basket__product-text-container'>
                        <h4 className='basket__product-title'>{text}</h4>
                        <div className='basket__product-text-box'>
                            <p className='basket__product-text'>Размер:</p>
                            <div className='basket__product-width-container'>
                                <p className='basket__product-text'>{width}</p>
                                <img src={arrow_width} alt='стрелка_ширины' className='basket__product-width-image' />
                            </div>
                            <div className='basket__product-height-container'>

                                <img src={arrow_height} alt='стрелка_высоты' className='basket__product-height-image' />
                                <p className='basket__product-text basket__product-text-heigth'>{height}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basket__products-button-group'>
                    <button className='basket__products-button-delete' onClick={deleteProduct}><img className='basket__products-button-delete-icon' src={wastebasket} alt="иконка удаления товара" /></button>
                    <div className='basket__products-changing'>
                        <button className='basket__products-button-minus' onClick={lessOrder}><p className='basket__products-button-minus-icon' >-</p></button>
                        <input type='number' className='basket__products-button-counter' maxLength={2} value={counter || ' '} disabled onChange={changeCounter} />
                        <button className='basket__products-button-plus' onClick={moreOrder} ><p className='basket__products-button-plus-icon' >+</p></button>
                    </div>
                </div>
                <p className='basket__products-price'>{price * counter} ₽</p>
            </div>
            <button className='basket__products-button-delete-mobile'><img className='basket__products-button-delete-icon' src={wastebasket} alt="иконка удаления товара" /></button>
        </div>
    );
}

export default BasketProductCard;
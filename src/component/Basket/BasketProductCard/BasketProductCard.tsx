import React from "react";
import arrow_height from '../../../img/arrow_height.svg';
import arrow_width from '../../../img/arrow_width.svg';
import wastebasket from '../../../img/wastebasket.svg';
import { basketCard } from '../../../utils/constantsBasketPage';
import './BasketProductCard.scss';

function BasketProductCard({ image, text, width, height, price, id, summOrder, setSummOrder, SetBaskedCardState, baskedCardState }) {

    const [counter, SetCounter] = React.useState(1);

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
        } else {
            setSummOrder(summOrder + price)
            SetCounter(counter + 1);
        }
    }
    // уменьшаем количество товаров
    function lessOrder() {
        if (counter <= 1) {
            SetCounter(1)
        } else {
            setSummOrder(summOrder - price)
            SetCounter(counter - 1);
        }
    }
    // удаляем товар
    function deleteProduct() {
        const item = baskedCardState.find(item => item.id === id);
        const object = baskedCardState.indexOf(item);
        if (object !== -1) {
            baskedCardState.splice(object, 1);
            console.log(baskedCardState);
            SetBaskedCardState(state => state.filter(c => c.id !== id))
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
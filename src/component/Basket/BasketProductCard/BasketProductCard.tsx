import React from "react";
import arrow_height from '../../../img/arrow_height.svg';
import arrow_width from '../../../img/arrow_width.svg';
import wastebasket from '../../../img/wastebasket.svg';
import './BasketProductCard.scss';

function BasketProductCard({ image, text, width, height, price }) {
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
                    <button className='basket__products-button-delete'><img className='basket__products-button-delete-icon' src={wastebasket} alt="иконка удаления товара" /></button>
                    <div className='basket__products-changing'>
                        <button className='basket__products-button-minus'><p className='basket__products-button-minus-icon' >-</p></button>
                        <p className='basket__products-button-counter'>1</p>
                        <button className='basket__products-button-plus'><p className='basket__products-button-plus-icon' >+</p></button>
                    </div>
                </div>
                <p className='basket__products-price'>{price}</p>
            </div>
            <button className='basket__products-button-delete-mobile'><img className='basket__products-button-delete-icon' src={wastebasket} alt="иконка удаления товара" /></button>
        </div>


    );
}

export default BasketProductCard;
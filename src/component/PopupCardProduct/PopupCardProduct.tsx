import Header from "../Header/Header";
import React from "react";
import { useParams } from 'react-router-dom'; // импортируем хук

function PopupCardProduct({ title, price, priceOld }) {
    let { id, category } = useParams(); // получаем доступ к параметру URL

    const [selectQuantity, setSelectQuantity] = React.useState('ds,bhtnt');
    const onChangeSelectQuantity = (e) => {
        setSelectQuantity(e.target.value)
    }

    const [selectColor, setSelectColor] = React.useState('ds,bhtnt');
    const onChangeSelectColor = (e) => {
        setSelectColor(e.target.value)
    }

    const [selectDecoration, setSelectDecoration] = React.useState('ds,bhtnt');
    const onChangeSelectDecoration = (e) => {
        setSelectDecoration(e.target.value)
    }


    return (
        <>
            <Header />
            <section className="card-product">
                <div className="card-product__image-part">
                    <div className="card-product__image-container">
                        <img src='/' className="card-product__image" alt='изображение с товаром' />
                    </div>
                    <div className="card-product__image-container-group">
                        <div className="card-product__image-container">
                            <img src='/' className="card-product__image" alt='изображение с товаром' />
                        </div>
                        <div className="card-product__image-container">
                            <img src='/' className="card-product__image" alt='изображение с товаром' />
                        </div>
                        <div className="card-product__image-container">
                            <img src='/' className="card-product__image" alt='изображение с товаром' />
                        </div>
                    </div>
                </div>
                <div className="card-product__information-part">
                    <h2 className="card-product__title">{title}</h2>
                    <div className="card-product__price-container">
                        <p className="card-product__price">{price}</p>
                        <p className="card-product__price-old">{priceOld}</p>
                    </div>
                    <div className="card-product__select-container">
                        <p className="card-product__quantity-title"></p>
                        <select className='select-quantity' value={selectQuantity || ''} onChange={onChangeSelectQuantity}>
                            <option value="1500">15 шт - 1500 руб.</option>
                            <option value="3000">30 шт - 3000 руб.</option>
                            <option value="4500">45 шт - 4500 руб.</option>
                            <option value="6000">60 шт - 6000 руб.</option>
                        </select>
                    </div>
                    <div className="card-product__select-container">
                        <p className="card-product__color-title"></p>
                        <select className='select-quantity' value={selectColor || ''} onChange={onChangeSelectColor}>
                            <option value="1500">15 шт - 1500 руб.</option>
                            <option value="3000">30 шт - 3000 руб.</option>
                            <option value="4500">45 шт - 4500 руб.</option>
                            <option value="6000">60 шт - 6000 руб.</option>
                        </select>
                    </div>
                    <div className="card-product__select-container">
                        <p className="card-product__decoration-title"></p>
                        <select className='select-decoration' value={selectDecoration || ''} onChange={onChangeSelectDecoration}>
                            <option value="1500">15 шт - 1500 руб.</option>
                            <option value="3000">30 шт - 3000 руб.</option>
                            <option value="4500">45 шт - 4500 руб.</option>
                            <option value="6000">60 шт - 6000 руб.</option>
                        </select>
                    </div>
                    <button className="card-product__button">Добавить в корзину</button>
                </div>
            </section>

        </>
    );
}


export default PopupCardProduct;
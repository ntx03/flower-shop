import React from "react";
import './Main.scss';
import { Link } from 'react-router-dom';
import image from '../../img/main__image.svg';
import tort from '../../img/tort.svg';
import ball from '../../img/air_ball.svg';
import fruts from '../../img/frut.svg';
import gifts from '../../img/gifts.svg';
import plants from '../../img/plants.svg';
import servises from '../../img/servises.svg';
import accessories from '../../img/accessories.svg';
import flowers from '../../img/flowers.svg';
import button_left from '../../img/button_left.svg';
import button_right from '../../img/button_right.svg';
import stock_flowers from '../../img/stock_flower.svg';


import CardMainProducts from "../CardMainProducts/CardMainProducts";
import CardStock from "../CardStock/CardStock";


function Main() {
    return (
        <section className="main">
            <div className="main__image-container">
                <img src={image} className="main__image" alt='изображение с фруктами'></img>
            </div>
            <div className="main__card-container">
                <CardMainProducts link={'/'} image={flowers} name={'Цветы'} />
                <CardMainProducts link={'/'} image={ball} name={'Воздушные шарики'} />
                <CardMainProducts link={'/'} image={tort} name={'Сладости'} />
                <CardMainProducts link={'/'} image={fruts} name={'Фруктовые корзины'} />
                <CardMainProducts link={'/'} image={plants} name={'Комнатные растения'} />
                <CardMainProducts link={'/'} image={gifts} name={'Подарки'} />
                <CardMainProducts link={'/'} image={servises} name={'Услуги'} />
                <CardMainProducts link={'/'} image={accessories} name={'Аксессуары'} />
            </div>
            <h2 className="main__title">Акции</h2>
            <div className="main__stock">
                <button className="main__stock-button-left"><img src={button_left} alt="левая кнопка в виде стрелки" /></button>
                <div className="main__stock-container">
                    <CardStock price={'150 руб.'} priseOld={'190 руб.'} image={stock_flowers} text={'Корзина роз'} />
                    <CardStock price={'150 руб.'} priseOld={'190 руб.'} image={stock_flowers} text={'Корзина роз'} />
                    <CardStock price={'150 руб.'} priseOld={'190 руб.'} image={stock_flowers} text={'Корзина роз'} />
                    <CardStock price={'150 руб.'} priseOld={'190 руб.'} image={stock_flowers} text={'Корзина роз'} />
                </div>
                <button className="main__stock-button-right"><img src={button_right} alt="правая кнопка в виде стрелки" /></button>
            </div>
            <h2 className="main__title">Заказать уникальный букет</h2>
            <form className="main__form">
                <div className="main__form-container">
                    <div className="main__form-input-container">
                        <input type="text" className="main__form-input-name" placeholder="Ваше имя" />
                        <input type="tel" className="main__form-input-phone" placeholder="Ваше имя" />
                        <textarea className="main__form-input-idea" placeholder="Ваша идея" />
                    </div>
                    <div className="main__form-button-container">
                        <button className="main__form-button-file">+ Прикрепить файл</button>
                        <button className="main__form-button-send">Отправить</button>
                    </div>
                </div>
                <div className="main__form-inmage-container">
                    <img className='main__form-image' src={stock_flowers} alt="букет цветов" />
                </div>
            </form>
        </section>


    );
}

export default Main;
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
//import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import './Main.scss';
import 'swiper/css';
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
import star from '../../img/star.svg';
import fotoapparat from '../../img/fotoapparat.svg';
import wallet from '../../img/wallet.svg';
import watch from '../../img/watch.svg';
import paper from '../../img/paper.svg';
import imagei from '../../img/image.svg';
import card from '../../img/plastic_card.svg';
import truck from '../../img/truck.svg';
import CardMainProducts from "../CardMainProducts/CardMainProducts";
import CardStock from "../CardStock/CardStock";
import InformationItem from "../InformationItem/InformationItem";


function Main() {
    const swiper = useSwiper();
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
                <button className="main__stock-button-left"><img src={button_left} alt="левая кнопка в виде стрелки" onClick={() => swiper.slideNext()} /></button>
                <Swiper className="main__stock-container" spaceBetween={30}
                    modules={[Pagination]}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide> <CardStock price={'1500 р'} priseOld={'1900 р'} image={stock_flowers} text={'Корзина роз yf pfrfop e ntnb rkfhs'} /></SwiperSlide>
                    <SwiperSlide> <CardStock price={'150 р'} priseOld={'190 р'} image={stock_flowers} text={'Корзина роз'} /></SwiperSlide>
                    <SwiperSlide><CardStock price={'150 р'} priseOld={'190 р'} image={stock_flowers} text={'Корзина роз'} /></SwiperSlide>
                    <SwiperSlide> <CardStock price={'150 р'} priseOld={'190 р'} image={stock_flowers} text={'Корзина роз'} /></SwiperSlide>
                    <SwiperSlide> <CardStock price={'1500 р'} priseOld={'1900 р'} image={stock_flowers} text={'Корзина роз yf pfrfop e ntnb rkfhs'} /></SwiperSlide>
                    <SwiperSlide> <CardStock price={'150 р'} priseOld={'190 р'} image={stock_flowers} text={'Корзина роз'} /></SwiperSlide>
                    <SwiperSlide><CardStock price={'150 р'} priseOld={'190 р'} image={stock_flowers} text={'Корзина роз'} /></SwiperSlide>
                    <SwiperSlide> <CardStock price={'150 р'} priseOld={'190 р'} image={stock_flowers} text={'Корзина роз'} /></SwiperSlide>

                </Swiper>
                <button className="main__stock-button-right"><img src={button_right} alt="правая кнопка в виде стрелки" /></button>
            </div>
            <h2 className="main__title">Заказать уникальный букет</h2>
            <form className="main__form">
                <div className="main__form-container">
                    <div className="main__form-input-container">
                        <input type="text" className="main__form-input-name" placeholder="Ваше имя" />
                        <input type="tel" className="main__form-input-phone" placeholder="Ваш телефон" />
                        <textarea className="main__form-input-idea" placeholder="Ваша идея" />
                    </div>
                    <div className="main__form-button-container">
                        <button className="main__form-button-file">+ Прикрепить файл</button>
                        <button className="main__form-button-send">Отправить</button>
                    </div>
                </div>
                <img className='main__form-image' src={stock_flowers} alt="букет цветов" />
            </form>
            <h2 className="main__title">4 веские причины выбрать нас!</h2>
            <div className="main__information">
                <InformationItem
                    title={'Качество'}
                    text={'На Рыжском рынке предоставлены оптовые продавцы, которые торгуют самыми свежими цветами'}
                    image={star} />
                <InformationItem
                    title={'Фото-отчет'}
                    text={'Перед доставкой мы отправляем Вам фотографию готового букета'}
                    image={fotoapparat} />
                <InformationItem
                    title={'Цена'}
                    text={'Да, у нас самые дешевые цены в онлайне! В 2-3 раза дешевле от обычных!'}
                    image={wallet} />
                <InformationItem
                    title={'Время'}
                    text={'Мы доставляем от 2-х часов! (Реальное время, а не маркетинговый ход)  И принимаем заказы 24/7'}
                    image={watch} />
            </div>
            <h2 className="main__title">Как оформить заказ?</h2>
            <div className="main__information main__information_end">
                <InformationItem
                    title={'Оставьте заявку на сайте'}
                    text={'Наш сотрудник свяжется с Вами для уточнения деталей вашего заказа'}
                    image={paper} />
                <InformationItem
                    title={'Фото-отчет'}
                    text={'Перед доставкой мы пришлем фотографию готового Вашего букета, чтобы Вы убедились в его качестве. После утверждения вами заказа, курьер поедет по адресу'}
                    image={imagei} />
                <InformationItem
                    title={'Способ оплаты'}
                    text={'Наличными либо безналичным расчетом банковской картой после доставки'}
                    image={card} />
                <InformationItem
                    title={'Доставка'}
                    text={'Возьмём на себя все заботы по созданию, оформлению и доставке корпоративных букетов в обычные  и праздничные дни за разумные деньги'}
                    image={truck} />
            </div>
        </section>


    );
}

export default Main;
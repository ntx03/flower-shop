import React from "react";
import Header from '../Header/Header';
import './Main.scss';
import 'swiper/css';
import image from '../../img/main__image.svg';
// для главного меню 
import { mainCardProducts, cardStock } from '../../utils/constantsMainPage';
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
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";

function Main() {

    // состояние ширины экрана
    const [width, setWidth] = React.useState(window.innerWidth);

    // мониторим ширину экрана
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    // установка ширины м/у карточкками в слайдере
    function spaceBetweenMonitor() {
        if (width > 1240) {
            return 30;
        }
        else if (width > 1050) {
            return 25;
        }
        else if (width > 900) {
            return 20;
        } else if (width > 500) {
            return 15;
        } else return 9;
    }
    // количество слайдов в контейнере
    function MonitorSlidesPerView() {
        if (width > 1000) {
            return 4;
        } else return 3;
    }

    return (
        <>
            <Header />
            <section className="main">
                <div className="main__image-container">
                    <img src={image} className="main__image" alt='изображение с фруктами'></img>
                </div>
                <div className="main__card-container">
                    {mainCardProducts.map((item) => {
                        return (<CardMainProducts link={item.link} image={item.image} name={item.name} key={item.name} />)
                    }
                    )}
                </div>
                <h2 className="main__title">Акции</h2>
                <div className="main__stock">
                    <button className="main__stock-button-left" ref={navigationPrevRef}><img src={button_left} alt="левая кнопка в виде стрелки" /></button>
                    <Swiper spaceBetween={spaceBetweenMonitor()}
                        slidesPerView={MonitorSlidesPerView()}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)} >
                        <div className="main__stock-container">
                            {cardStock.map((item, index) => {
                                return (<SwiperSlide><CardStock price={item.price} priseOld={item.priseOld} image={item.image} text={item.text} key={index} /></SwiperSlide>)
                            }
                            )}
                        </div>
                    </Swiper>
                    <button className="main__stock-button-right" ref={navigationNextRef}><img src={button_right} alt="правая кнопка в виде стрелки" /></button>
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
        </>


    );
}

export default Main;
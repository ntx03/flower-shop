import Header from "../Header/Header";
import React from "react";
import './PopupCardProduct.scss';
import { Link } from 'react-router-dom'; // импортируем хук
import arrow_height from '../../img/arrow_height.svg';
import arrow_width from '../../img/arrow_width.svg';
import button_left from '../../img/button_left.svg';
import button_right from '../../img/button_right.svg';
import arrow_back from '../../img/arrow_back.svg';
import orange_sun from '../../img/orange_sun.svg';
import green_sun from '../../img/green_sun.svg';
import pink_sun from '../../img/pink_sun.svg';
import red_sun from '../../img/red_sun.svg';
import blue_sun from '../../img/blue_sun.svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination } from "swiper";
import WhyUsCard from "./WhyUsCard/WhyUsCard";
import ReviewsCard from "./ReviewsCard/ReviewsCard";
import { useAppSelector, useAppDispatch } from '../../../src/hooks';
import { setBasketState } from '../../store/basketStateSlise';


function PopupCardProduct() {
    // берем данные товара, который выбрал покупатель
    const popupCardState = useAppSelector(state => state.product.popupCardState);

    const [selectQuantity, setSelectQuantity] = React.useState(popupCardState.minProduct);
    const onChangeSelectQuantity = (e) => {
        setSelectQuantity(e.target.value)
    }

    const [selectColor, setSelectColor] = React.useState(popupCardState.color[0]);
    const onChangeSelectColor = (e) => {
        setSelectColor(e.target.value)
    }

    const [selectDecoration, setSelectDecoration] = React.useState(popupCardState.otherServices[0].price);
    const onChangeSelectDecoration = (e) => {
        setSelectDecoration(e.target.value)
    }
    // управление кнопками слайдера отзывов
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    // управление кнопками слайдера товара
    const navigationPrev = React.useRef(null)
    const navigationNext = React.useRef(null)

    // управление кнопками слайдера приемущества
    const Prev = React.useRef(null)
    const Next = React.useRef(null)

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

    // количество слайдов в контейнере
    function monitorSlidesPerView(): number {
        if (width > 1000) {
            return 4;
        } else if (width > 500) {
            return 3;
        } else return 2;
    }

    // создаем состояние для главного изображения 
    const [image, SetImage] = React.useState(popupCardState.image);

    const dispatch = useAppDispatch();

    // функция отображения фотографий 
    function showImage(e) {
        SetImage(e.target.src)
    }

    interface data {
        image: string,
        width: number,
        height: number,
        price: number,
        id: number,
        color: string,
        text: string,
        priceOtherServices: number,
        counter: number
    }

    function addBasket() {
        const data: data = {
            image: popupCardState.image,
            width: popupCardState.width,
            height: popupCardState.height,
            price: (popupCardState.price + Number(selectDecoration)),
            id: Math.round(Math.random() * 100000),
            color: selectColor,
            text: popupCardState.text,
            priceOtherServices: Number(selectDecoration),
            counter: Number(selectQuantity)
        }
        dispatch(setBasketState(data));
    }

    return (
        <>
            <Header />
            <div className="goBack">
                <Link to={popupCardState.path} className="goBack__image" ><img src={arrow_back} alt="стрелка назад" /></Link>
                <p className="goBack__text">Обратно в магазин</p>
            </div>
            <section className="card-product">
                <div className="card-product-container">
                    <div className="card-product__image-part">
                        <div className="card-product__image-container">
                            <img src={image} className="card-product__image" alt='изображение с товаром' />
                        </div>
                        <div className="card-product__image-container-group">
                            <div className="card-product__image-container-mini">
                                <img src={popupCardState.image} className="card-product__image-mini" alt='изображение с товаром' onClick={showImage} />
                            </div>
                            <div className="card-product__image-container-mini">
                                <img src={popupCardState.image2} className="card-product__image-mini" alt='изображение с товаром' onClick={showImage} />
                            </div>
                            <div className="card-product__image-container-mini">
                                <img src={popupCardState.image3} className="card-product__image-mini" alt='изображение с товаром' onClick={showImage} />
                            </div>
                        </div>
                        <div className='basket__product-text-box'>
                            <p className='basket__product-text'>Размер:</p>
                            <div className='basket__product-width-container'>
                                <p className='basket__product-text'>{popupCardState.width} cм</p>
                                <img src={arrow_width} alt='стрелка_ширины' className='basket__product-width-image' />
                            </div>
                            <div className='basket__product-height-container'>

                                <img src={arrow_height} alt='стрелка_высоты' className='basket__product-height-image' />
                                <p className='basket__product-text basket__product-text-heigth'>{popupCardState.height} cм</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-product__image-part-swiper">
                        <button className="card-product-button-left" ref={navigationPrev}><img src={button_left} alt="левая кнопка в виде стрелки" /></button>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            effect={"fade"}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectFade, Pagination, Navigation]}
                            navigation={{
                                prevEl: navigationPrev.current,
                                nextEl: navigationNext.current,
                            }}
                            onBeforeInit={(swiper) => {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                // eslint-disable-next-line no-param-reassign
                                swiper.params.navigation.prevEl = navigationPrev.current;
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                // eslint-disable-next-line no-param-reassign
                                swiper.params.navigation.nextEl = navigationNext.current;
                            }}
                            className="mySwiper"

                        >
                            <SwiperSlide>  <div className="card-product__image-container-swiper">
                                <img src={popupCardState.image} className="card-product__image-swiper" alt='изображение с товаром' />
                            </div> </SwiperSlide>
                            <SwiperSlide>  <div className="card-product__image-container-swiper">
                                <img src={popupCardState.image2} className="card-product__image-swiper" alt='изображение с товаром' />
                            </div> </SwiperSlide>
                            <SwiperSlide>  <div className="card-product__image-container-swiper">
                                <img src={popupCardState.image3} className="card-product__image-swiper" alt='изображение с товаром' />
                            </div> </SwiperSlide>
                        </Swiper>
                        <button className="card-product-button-right" ref={navigationNext}><img src={button_right} alt="правая кнопка в виде стрелки" /></button>
                    </div>

                    <div className="card-product__information-part">
                        <h2 className="card-product__title">{popupCardState.text}</h2>
                        <div className="card-product__price-container">
                            <p className="card-product__price">{popupCardState.price} p</p>
                            <p className="card-product__price_gray">{popupCardState.priceOld}</p>
                        </div>
                        <div className="card-product__select-container">
                            <p className="card-product__quantity-title">Количество</p>
                            <select className='select-quantity' value={selectQuantity || ''} onChange={onChangeSelectQuantity}>
                                <option value={popupCardState.minProduct}>{popupCardState.minProduct} шт - {popupCardState.price} руб.</option>
                                <option value={popupCardState.minProduct * 2}>{popupCardState.minProduct * 2} шт - {popupCardState.price * 2} руб.</option>
                                <option value={popupCardState.minProduct * 3}>{popupCardState.minProduct * 3} шт - {popupCardState.price * 3} руб.</option>
                                <option value={popupCardState.minProduct * 4}>{popupCardState.minProduct * 4} шт - {popupCardState.price * 4} руб.</option>
                            </select>
                        </div>
                        <div className="card-product__select-container">
                            <p className="card-product__color-title">Цвет</p>
                            <select className='select-quantity' value={selectColor || ''} onChange={onChangeSelectColor}>
                                {popupCardState.color.map((i) => {
                                    return <option value={i}>{i} </option>
                                })}
                            </select>
                        </div>
                        <div className="card-product__select-container">
                            <p className="card-product__decoration-title">Оформление</p>
                            <select className='select-decoration' value={selectDecoration || ''} onChange={onChangeSelectDecoration}>
                                {popupCardState.otherServices.map((i) => {
                                    return <option value={i.price}>{i.text}</option>
                                })}
                            </select>
                        </div>
                        <button className="card-product__button" onClick={addBasket}>Добавить в корзину</button>
                    </div>
                </div>
                <div className='card-product__reviews-header-container'>
                    <h3 className="card-product__reviews-header">Отзывы ({popupCardState.reviews.length})</h3>
                    <button className="card-product__reviews-header-button">Написать отзыв</button>
                </div>
                <div className="card-product__reviews">
                    <button className="card-product-button-left" ref={navigationPrevRef}><img src={button_left} alt="левая кнопка в виде стрелки" /></button>
                    <Swiper spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
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
                    >
                        {popupCardState.reviews.map((i, index) => {
                            return <SwiperSlide><ReviewsCard title={i.name} text={i.text} key={index} /></SwiperSlide>
                        })}

                    </Swiper >
                    <button className="card-product-button-right" ref={navigationNextRef}><img src={button_right} alt="правая кнопка в виде стрелки" /></button>
                </div >
                <div className='card-product__reviews-header-container'>
                    <h3 className="card-product__reviews-header">Почему именно мы?</h3>

                </div>
                <div className="card-product__reviews">
                    <button className="card-product-button-left" ref={Prev}><img src={button_left} alt="левая кнопка в виде стрелки" /></button>
                    <Swiper spaceBetween={10}
                        slidesPerView={monitorSlidesPerView()}
                        navigation={{
                            prevEl: Prev.current,
                            nextEl: Next.current,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        onBeforeInit={(swiper) => {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            swiper.params.navigation.prevEl = Prev.current;
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            swiper.params.navigation.nextEl = Next.current;
                        }}
                    >
                        <SwiperSlide><WhyUsCard image={orange_sun} text={'Круглосуточная доставка'} key={'Круглосуточная доставка'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={green_sun} text={'Фотоотчет'} key={'Фотоотчет'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={green_sun} text={'Приемлемые цены'} key={'Приемлемые цены'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={pink_sun} text={'Гарантия качества'} key={'Гарантия качества'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={red_sun} text={'Индивидуальный подход'} key={'Индивидуальный подход'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={blue_sun} text={'Бесплатная открытка'} key={'Бесплатная открытка'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={green_sun} text={'Круглосуточная служба поддержки'} key={'Круглосуточная служба поддержки'} /></SwiperSlide>
                    </Swiper >
                    <button className="card-product-button-right" ref={Next} ><img src={button_right} alt="правая кнопка в виде стрелки" /></button>
                </div >
            </section>
        </>
    );
}


export default PopupCardProduct;
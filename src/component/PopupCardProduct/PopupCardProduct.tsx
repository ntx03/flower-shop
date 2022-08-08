import Header from "../Header/Header";
import React from "react";
import './PopupCardProduct.scss';
import { Link, useParams } from 'react-router-dom'; // импортируем хук
import arrow_height from '../../img/arrow_height.svg';
import arrow_width from '../../img/arrow_width.svg';
import button_left from '../../img/button_left.svg';
import button_right from '../../img/button_right.svg';
import flowers from '../../img/flowers.svg';
import basket from '../../img/plants.svg';
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


function PopupCardProduct() {
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



    return (
        <>
            <Header />
            <div className="goBack">
                <Link to={'/flowers'} className="goBack__image" ><img src={arrow_back} alt="стрелка назад" /></Link>
                <p className="goBack__text">Обратно в магазин</p>
            </div>
            <section className="card-product">
                <div className="card-product-container">
                    <div className="card-product__image-part">
                        <div className="card-product__image-container">
                            <img src={flowers} className="card-product__image" alt='изображение с товаром' />
                        </div>
                        <div className="card-product__image-container-group">
                            <div className="card-product__image-container-mini">
                                <img src={flowers} className="card-product__image-mini" alt='изображение с товаром' />
                            </div>
                            <div className="card-product__image-container-mini">
                                <img src={flowers} className="card-product__image-mini" alt='изображение с товаром' />
                            </div>
                            <div className="card-product__image-container-mini">
                                <img src={flowers} className="card-product__image-mini" alt='изображение с товаром' />
                            </div>
                        </div>
                        <div className='basket__product-text-box'>
                            <p className='basket__product-text'>Размер:</p>
                            <div className='basket__product-width-container'>
                                <p className='basket__product-text'>60 cм</p>
                                <img src={arrow_width} alt='стрелка_ширины' className='basket__product-width-image' />
                            </div>
                            <div className='basket__product-height-container'>

                                <img src={arrow_height} alt='стрелка_высоты' className='basket__product-height-image' />
                                <p className='basket__product-text basket__product-text-heigth'>60 cм</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-product__image-part-swiper">
                        <button className="card-product-button-left" ref={navigationPrev}><img src={button_left} alt="левая кнопка в виде стрелки" /></button>
                        <Swiper
                            spaceBetween={0}
                            // slidesPerView={1}
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
                                <img src={flowers} className="card-product__image-swiper" alt='изображение с товаром' />
                            </div> </SwiperSlide>
                            <SwiperSlide>  <div className="card-product__image-container-swiper">
                                <img src={basket} className="card-product__image-swiper" alt='изображение с товаром' />
                            </div> </SwiperSlide>
                            <SwiperSlide>  <div className="card-product__image-container-swiper">
                                <img src={flowers} className="card-product__image-swiper" alt='изображение с товаром' />
                            </div> </SwiperSlide>
                        </Swiper>
                        <button className="card-product-button-right" ref={navigationNext}><img src={button_right} alt="правая кнопка в виде стрелки" /></button>
                    </div>

                    <div className="card-product__information-part">
                        <h2 className="card-product__title">Корзина фиолетовых роз</h2>
                        <div className="card-product__price-container">
                            <p className="card-product__price">1500 p</p>
                            <p className="card-product__price_gray">2500 p</p>
                        </div>
                        <div className="card-product__select-container">
                            <p className="card-product__quantity-title">Количество</p>
                            <select className='select-quantity' value={selectQuantity || ''} onChange={onChangeSelectQuantity}>
                                <option value="1500">15 шт - 1500 руб.</option>
                                <option value="3000">30 шт - 3000 руб.</option>
                                <option value="4500">45 шт - 4500 руб.</option>
                                <option value="6000">60 шт - 6000 руб.</option>
                            </select>
                        </div>
                        <div className="card-product__select-container">
                            <p className="card-product__color-title">Цвет</p>
                            <select className='select-quantity' value={selectColor || ''} onChange={onChangeSelectColor}>
                                <option value="Фиолетовый">Фиолетовый</option>
                                <option value="Красный">Красный</option>
                                <option value="Розовый">Розовый</option>
                            </select>
                        </div>
                        <div className="card-product__select-container">
                            <p className="card-product__decoration-title">Оформление</p>
                            <select className='select-decoration' value={selectDecoration || ''} onChange={onChangeSelectDecoration}>
                                <option value="0">Прозрачная упаковка - 0 руб.</option>
                                <option value="100">Не прозрачная  упаковка - 100 руб.</option>
                                <option value="500">Красивая  упаковка - 500 руб.</option>
                            </select>
                        </div>
                        <button className="card-product__button">Добавить в корзину</button>
                    </div>


                </div>
                <div className='card-product__reviews-header-container'>
                    <h3 className="card-product__reviews-header">Отзывы (3)</h3>
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
                        <SwiperSlide><ReviewsCard title={'Алексей'} text={'Товар отличного качества!'} /></SwiperSlide>
                        <SwiperSlide><ReviewsCard title={'Олеся'} text={'Отличный букет.Рекомендую!'} /></SwiperSlide>
                        <SwiperSlide><ReviewsCard title={'Паша'} text={'Доставили очень быстро!Доставили очень быстро!Доставили очень быстро!Доставили очень быстро!Доставили очень быстро!Доставили очень быстро!Доставили очень быстро!Доставили очень быстро!Доставили очень быстро!'} /></SwiperSlide>
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
                        <SwiperSlide><WhyUsCard image={orange_sun} text={'Круглосуточная доставка'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={green_sun} text={'Фотоотчет'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={green_sun} text={'Приемлемые цены'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={pink_sun} text={'Гарантия качества'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={red_sun} text={'Индивидуальный подход'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={blue_sun} text={'Бесплатная открытка'} /></SwiperSlide>
                        <SwiperSlide><WhyUsCard image={green_sun} text={'Круглосуточная служба поддержки'} /></SwiperSlide>

                    </Swiper >
                    <button className="card-product-button-right" ref={Next}><img src={button_right} alt="правая кнопка в виде стрелки" /></button>
                </div >
            </section>
        </>
    );
}


export default PopupCardProduct;
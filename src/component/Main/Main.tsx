import React from "react";
import Header from '../Header/Header';
import './Main.scss';
import 'swiper/css';
import image from '../../img/main__image.jpg';
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
import CardMainProducts from "./CardMainProducts/CardMainProducts";
import CardStock from "./CardStock/CardStock";
import InformationItem from "./InformationItem/InformationItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import { send } from 'emailjs-com';

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
    function monitorSpaceBetween(): number {
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
    function monitorSlidesPerView(): number {
        if (width > 1000) {
            return 4;
        } else if (width > 400) {
            return 3;
        } else return 2;
    }

    const [fileAppend, SetFileAppend] = React.useState(false);
    const [toSend, setToSend] = React.useState({
        from_name: '',
        telephone: '',
        my_idea: '',
        file: '',
    });
    // валидируем фото которое добавляем
    function handleChangeFile(event) {
        const file = event.target.files[0];
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Разрешены только изображения!');
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert('Файл должен быть не более 2 МБ!');
            return;
        }
        let formData = new FormData();
        formData.append('file', file);
        localStorage.setItem('fileForm', file.name)
        SetFileAppend(true);
        setToSend({ ...toSend, [event.target.name]: file.name });
    }
    //валидируем имя
    const [nameValidate, setNameValidate] = React.useState(false);
    const handleChangeName = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        if (e.target.value.length < 2) {
            setNameValidate(false);
        } else {
            setNameValidate(true);
        }
    };

    //валидируем телефон
    const [phoneValidate, setPhoneValidate] = React.useState(false);
    const handleChangePhone = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        const re =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneValidate(false);
        } else {
            setPhoneValidate(true);
        }
    };

    //валидируем поле с текстом
    const [textValidate, setTextValidate] = React.useState(false);
    const handleChangeText = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        if (e.target.value.length < 6) {
            setTextValidate(false);
        } else {
            setTextValidate(true);
        }
    };

    //валидируем кнопку
    const [validate, setValidate] = React.useState(false);
    React.useEffect(() => {
        if (!phoneValidate || !nameValidate || !textValidate) {
            setValidate(false);
        } else { setValidate(true); }
    }, [textValidate, nameValidate, phoneValidate])

    // отправляем форму
    const onSubmitDisable = (e) => {
        console.log(validate);
        e.preventDefault();
        alert('Форма заполнена неправильно!')
    }
    // отправляем сообщение с предложением
    const onSubmit = (e) => {
        console.log(validate);
        e.preventDefault();
        send(
            'service_zj8r1gp',
            'template_rnj4ymp',
            toSend,
            '9qdGrAcEbgEjFZ2GY'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                SetFileAppend(false);
                setToSend({
                    from_name: '',
                    telephone: '',
                    my_idea: '',
                    file: '',
                })
                alert('Сообщение успешно отправлено!');
                setValidate(false);
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert('Произошла ошибка! Попробуйте еще раз!');
            });

    }

    return (
        <>
            <Header />
            <section className="main">
                <div className="main__image-container">
                    <img src={image} className="main__image" alt='изображение с фруктами'></img>
                </div>
                <div className="main__card-container">
                    {mainCardProducts.map((item, index) => {
                        return (<CardMainProducts link={item.link} image={item.image} name={item.name} key={index} />)
                    }
                    )}
                </div>
                <h2 className="main__title">Акции</h2>
                <div className="main__stock">
                    <button className="main__stock-button-left" ref={navigationPrevRef}><img src={button_left} alt="левая кнопка в виде стрелки" /></button>
                    <Swiper spaceBetween={monitorSpaceBetween()}
                        slidesPerView={monitorSlidesPerView()}
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
                    >
                        <div className="main__stock-container">
                            {cardStock.map((item) => {
                                return (<SwiperSlide><CardStock price={item.price} priseOld={item.priseOld} image={item.image} text={item.text} key={item.id} width={item.width} height={item.height} id={item.id} minProduct={item.minProduct} /></SwiperSlide>)
                            }
                            )}
                        </div>
                    </Swiper>
                    <button className="main__stock-button-right" ref={navigationNextRef}><img src={button_right} alt="правая кнопка в виде стрелки" /></button>
                </div>
                <h2 className="main__title">Заказать уникальный букет</h2>
                <form className="main__form" onSubmit={validate ? onSubmit : onSubmitDisable}>
                    <div className="main__form-container">
                        <div className="main__form-input-container">
                            <input type="text" name='from_name' className={nameValidate ? "main__form-input-name" : "main__form-input-name main__form-input_validate"} value={toSend.from_name} onChange={handleChangeName} placeholder="Ваше имя" />
                            <input type="tel" name='telephone' className={phoneValidate ? "main__form-input-phone" : "main__form-input-phone main__form-input_validate"} value={toSend.telephone} onChange={handleChangePhone} placeholder="Ваш телефон" />
                            <textarea className={textValidate ? "main__form-input-idea" : "main__form-input-idea main__form-input_validate"} name='my_idea' value={toSend.my_idea} onChange={handleChangeText} placeholder="Ваша идея" />
                        </div>

                        <div className="main__form-button-container">
                            <input type="file" name="file" id="input__file" onChange={handleChangeFile} />
                            <label htmlFor="input__file" className="main__form-button-file">+ Прикрепить файл</label>
                            <button className="main__form-button-send" type="submit">Отправить</button>
                        </div>
                        <p className={fileAppend ? "main__form-input-file-text" : 'main__form-input-file-text_none'}>{`Файл ${localStorage.getItem('fileForm')} успешно добавлен`}</p>
                    </div>
                    <img className='main__form-image' src={stock_flowers} alt="букет цветов" />
                </form>
                <h2 className="main__title">4 веские причины выбрать нас!</h2>
                <div className="main__information">
                    <InformationItem
                        title={'Качество'}
                        text={'На Рыжском рынке предоставлены оптовые продавцы, которые торгуют самыми свежими цветами'}
                        image={star}
                        key={'Качество'} />
                    <InformationItem
                        title={'Фото-отчет'}
                        text={'Перед доставкой мы отправляем Вам фотографию готового букета'}
                        image={fotoapparat}
                        key={'Фото-отчет'} />
                    <InformationItem
                        title={'Цена'}
                        text={'Да, у нас самые дешевые цены в онлайне! В 2-3 раза дешевле от обычных!'}
                        image={wallet}
                        key={'Цена'} />
                    <InformationItem
                        title={'Время'}
                        text={'Мы доставляем от 2-х часов! (Реальное время, а не маркетинговый ход)  И принимаем заказы 24/7'}
                        image={watch}
                        key={'Время'} />
                </div>
                <h2 className="main__title">Как оформить заказ?</h2>
                <div className="main__information main__information_end">
                    <InformationItem
                        title={'Оставьте заявку на сайте'}
                        text={'Наш сотрудник свяжется с Вами для уточнения деталей вашего заказа'}
                        image={paper}
                        key={'Оставьте заявку на сайте'} />
                    <InformationItem
                        title={'Фото-отчет'}
                        text={'Перед доставкой мы пришлем фотографию готового Вашего букета, чтобы Вы убедились в его качестве. После утверждения вами заказа, курьер поедет по адресу'}
                        image={imagei}
                        key={'Фото-отчет'} />
                    <InformationItem
                        title={'Способ оплаты'}
                        text={'Наличными либо безналичным расчетом банковской картой после доставки'}
                        image={card}
                        key={'Способ оплаты'} />
                    <InformationItem
                        title={'Доставка'}
                        text={'Возьмём на себя все заботы по созданию, оформлению и доставке корпоративных букетов в обычные  и праздничные дни за разумные деньги'}
                        image={truck}
                        key={'Доставка'} />
                </div>
            </section>
        </>


    );
}

export default Main;
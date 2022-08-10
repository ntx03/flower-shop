import './BasketOrderRegistration.scss';
import '../Basket/Basket.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { orderCard } from '../../utils/constantsBasketPage';
import OrderProductCard from '../BasketOrderRegistration/OrderProductCard/OrderProductCard';
import BasketCheckBox from '../Basket/BasketCheckBox/BasketCheckBox';
import image from '../../img/image.svg';
import fotoapparat from '../../img/fotoapparat.svg';
import telephone from '../../img/input_telephone.svg';
import email from '../../img/input_email.svg';
import people from '../../img/input_peaple.svg';
import arrow from '../../img/arrow_down.svg';
import calendar from '../../img/input_calendar.svg';
import { useAppSelector, useAppDispatch } from '../../../src/hooks';

function BasketOrderRegistration() {

    // берем данные товара, который выбрал покупатель
    const basketState = useAppSelector(state => state.basket.basketState);

    const [phone, setPhone] = React.useState();
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const [emailValue, setEmailValue] = React.useState();
    const onChangeEmail = (e) => {
        setEmailValue(e.target.value)
    }

    const [name, setName] = React.useState();
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const [FIO, setFIO] = React.useState();
    const onChangeFIO = (e) => {
        setFIO(e.target.value)
    }
    const [phoneAdress, setPhoneAdress] = React.useState();
    const onChangePhoneAdress = (e) => {
        setPhoneAdress(e.target.value)
    }
    const [adress, setAdress] = React.useState();
    const onChangeAdress = (e) => {
        setAdress(e.target.value)
    }

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const [date, setDate] = React.useState(`${dd}.${mm}.${yyyy}`);
    console.log(date);
    const onChangeDate = (e) => {
        setDate(e.target.value)
    }

    const [selectTime, setSelectTime] = React.useState('утро (10:00-12:00)');
    const onChangeSelectTime = (e) => {
        setSelectTime(e.target.value)
    }
    // чекбокс я сам получу заказ
    const [checkbox, SetCheckbox] = React.useState(false);

    // чекбокс в течении трех часов после оплаты
    const [checkboxTheeHouers, SetCheckboxTheeHouers] = React.useState(false);

    // чекбокс в узнать адрес доставки у получателя
    const [checkboxFindAdress, SetСheckboxFindAdress] = React.useState(false);

    // чекбокс бесплатная открытка
    const [сheckboxPostcardForFree, SetCheckboxPostcardForFree] = React.useState(false);

    // чекбокс фото букета
    const [сheckboxBouquetPhoto, SetCheckboxBouquetPhoto] = React.useState(false);

    // чекбокс бесплатное фото
    const [сheckboxFhotoFree, SetCheckboxFhotoFree] = React.useState(false);

    // чекбокс бесконтактная доставка
    const [сheckboxContactlessDelivery, SetСheckboxContactlessDelivery] = React.useState(false);

    // суммируем общую цену в корзине
    const [summOrder, setSummOrder] = React.useState(0);

    React.useEffect(() => {
        const arr = [0];
        basketState.forEach((i) => {
            arr.push(i.price * i.counter);
        })
        const summ = arr.reduce((a, b) => { return a + b });
        setSummOrder(summ);
    }, [basketState])

    console.log(basketState);
    return (
        <>
            <Header />
            <section className='order'>
                <div className='order__truckBuy'>
                    <div className='order__header-container'>
                        <p className="order__header-text">Корзина</p>
                        <p className="order__header-text">Оформление заказа</p>
                        <p className="order__header-text order__header-text_gray">Оплата</p>
                    </div>
                    <div className='order__indication-container'>
                        <div className='order__one'>1</div>
                        <div className='order__one'>2</div>
                        <div className='order__one order__two'>3</div>
                        <div className='order__line'></div>
                    </div>
                </div>
                <div className='order__list'>
                    <p className='order__list-title'><span className='order__list-title-span'>ваш заказ</span> в г.Москва с доставкой на сумму <span className='order__list-title-span'>{summOrder}₽</span> </p>
                    <>
                        {basketState.map((item) => <OrderProductCard image={item.image} text={item.text} price={item.price} counter={item.counter} />)}
                    </>
                </div>
                <div className='order__check-box-container'>
                    <BasketCheckBox image={image} text={'Добавьте открытку -'} textSpan={'бесплатно!'} qestionInformation={'вопрос'} checked={сheckboxPostcardForFree} SetChecked={SetCheckboxPostcardForFree} />
                    <BasketCheckBox image={fotoapparat} text={'Фото при получении -'} textSpan={'бесплатно!'} qestionInformation={'вопрос'} checked={сheckboxBouquetPhoto} SetChecked={SetCheckboxBouquetPhoto} />
                    <BasketCheckBox image={fotoapparat} text={'Фото букета до доставки -'} textSpan={'бесплатно!'} qestionInformation={'вопрос'} checked={сheckboxFhotoFree} SetChecked={SetCheckboxFhotoFree} />
                </div>
                <form className='order__form'>
                    <div className='order__form-title-container'>
                        <h2 className='order__form-title'>ОТПРАВИТЕЛЬ</h2>
                        <div className='order__form-title-checkbox-container'>
                            <input className='order__form-checkbox' type="checkbox" checked={checkbox} onChange={() => { SetCheckbox(!checkbox) }} />
                            <p className='order__form-checkbox-text'>Я САМ ПОЛУЧУ ЗАКАЗ</p>
                        </div>
                    </div>
                    <div className='order__form-input-container'>
                        <div className="input-width">
                            <div className="width-setter">
                                <input className='input' type="tel" value={phone || ''} onChange={onChangePhone} placeholder='Ваш телефон' />
                            </div>
                            <img className='order__form-input-icon' src={telephone} alt="иконка" />
                        </div>
                        <div className="input-width">
                            <div className="width-setter">
                                <input className='input' type="email" value={emailValue || ''} onChange={onChangeEmail} placeholder='Ваш е-mail' />
                            </div>
                            <img className='order__form-input-icon' src={email} alt="иконка" />
                        </div>
                        <div className="input-width">
                            <div className="width-setter">
                                <input className='input' type="text" value={name || ''} onChange={onChangeName} placeholder='Ваше имя' />
                            </div>
                            <img className='order__form-input-icon' src={people} alt="иконка" />
                        </div>
                    </div>
                    <div className='order__form-title-container'>
                        <h2 className='order__form-title'>ПОЛУЧАТЕЛЬ</h2>
                    </div>
                    <div className='order__form-input-container'>
                        <div className="input-width">
                            <div className="width-setter">
                                <input className='input' type="text" value={FIO || ''} onChange={onChangeFIO} placeholder='Фамилия Имя Отчетсво' />
                            </div>
                            <img className='order__form-input-icon' src={people} alt="иконка" />
                        </div>
                        <div className="input-width">
                            <div className="width-setter">
                                <input className='input' type="tel" value={phoneAdress || ''} onChange={onChangePhoneAdress} placeholder='Телефон получателя' />
                            </div>
                            <img className='order__form-input-icon' src={telephone} alt="иконка" />
                        </div>
                        <div className="input-width">
                            <div className="width-setter">
                                <input className='input' type="text" disabled placeholder='Уточнить адрес и время доставки' />
                            </div>
                            <img className='order__form-input-icon' src={arrow} alt="иконка" />
                        </div>
                    </div>
                    <p className='order__form-text'>Мы позвоним получателю и уточним удобное время и адрес доставки. При звонке мы не скажем про цветы. Приоритетным будет время и адрес доставки, которые сообщит нам получатель.</p>
                    <div className='order__form-title-container'>
                        <h2 className='order__form-title'>ДАТА И ВРЕМЯ ДОСТАВКИ</h2>
                    </div>
                    <div className='order__form-input-container'>
                        <div className="input-width">
                            <div className="width-setter">
                                <p className='width-setter-text'>Дата доставки</p>
                                <input className='input input__date' disabled={checkbox} type="date" value={date || ''} onChange={onChangeDate} />
                            </div>
                            <img className='order__form-input-icon' src={calendar} alt="иконка" />
                        </div>
                        <div className="input-width">
                            <div className="width-setter">
                                <p className='width-setter-text'>Время доставки</p>
                                <select className='select' disabled={checkbox} value={selectTime || ''} onChange={onChangeSelectTime}>
                                    <option value="утро (10:00-12:00)">утро (10:00-12:00)</option>
                                    <option value="день (12:00 - 18:00)">день (12:00 - 18:00)</option>
                                    <option value="вечер (18:00 - 22:00)">вечер (18:00 - 22:00)</option>
                                    <option value="ночь (22:00 - 02:00)">ночь (22:00 - 02:00)</option>
                                </select>
                            </div>
                            <img className='order__form-input-icon ' src={telephone} alt="иконка" />
                        </div>
                        <div className='order__form-title-checkbox-container'>
                            <input className='order__form-checkbox-delivery' disabled={checkbox} type="checkbox" checked={checkboxTheeHouers} onChange={() => { SetCheckboxTheeHouers(!checkboxTheeHouers) }} />
                            <p className='order__form-checkbox-text-delivery'>В течение 3-х часов после оплаты заказа</p>
                        </div>
                    </div>
                    <div className='order__form-title-container'>
                        <h2 className='order__form-title'>АДРЕС ДОСТАВКИ (+ ВАШИ ПОЖЕЛАНИЯ К ЗАКАЗУ)</h2>
                    </div>
                    <div className='order__form-input-container-two'>
                        <div className='input__container'>
                            <div className="input-city">
                                <select className='select select-city' disabled={checkbox} value={selectTime || ''} onChange={onChangeSelectTime}>
                                    <option value="Москва">Москва</option>
                                    <option value="Тюмень">Тюмень</option>
                                    <option value="Томск">Томск</option>
                                    <option value="Омск">Омск</option>
                                </select>
                            </div>

                            <div className="width-setter width-seter_adress">
                                <input className='input input_adress' type="text" disabled={checkbox} value={adress || ''} onChange={onChangeAdress} />
                            </div>
                        </div>
                        <div className='order__form-title-checkbox-container-box'>
                            <div className='order__form-title-checkbox-container'>
                                <input className='order__form-checkbox-delivery' disabled={checkbox} type="checkbox" checked={checkboxFindAdress} onChange={() => { SetСheckboxFindAdress(!checkboxFindAdress) }} />
                                <p className='order__form-checkbox-text-delivery'>Узнать адрес доставки у получателя</p>
                            </div>
                            <div className='order__form-title-checkbox-container-delivery'>
                                <input className='order__form-checkbox-delivery' disabled={checkbox} type="checkbox" checked={сheckboxContactlessDelivery} onChange={() => { SetСheckboxContactlessDelivery(!сheckboxContactlessDelivery) }} />
                                <p className='order__form-checkbox-text-delivery'>Бесконтактная доставка</p>
                                <p className='basket__check-box-item-information' title='привет'>?</p>
                            </div>
                        </div>
                    </div>
                    <div className='order__form-button-box'>
                        <Link to={'/basket'} className='order__form-button-basket'>Вернуться в корзину</Link>
                        <button className='order__form-button-pay'>Перейти к оплате</button>
                        <p className='order__form-politica-text'>Нажимая кнопку "Перейти к оплате", вы соглашаетесь с правилами <span className='order__form-politica-text-span'>Политики конфиденциальности</span></p>
                    </div>
                </form>

            </section>
        </>
    );
}

export default BasketOrderRegistration;
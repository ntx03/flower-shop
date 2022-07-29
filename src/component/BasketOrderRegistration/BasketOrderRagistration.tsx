import './BasketOrderRegistration.scss';
import React from 'react';
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
import time from '../../img/input_clock.svg';


function BasketOrderRegistration() {
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
    const [date, setDate] = React.useState();
    const onChangeDate = (e) => {
        setDate(e.target.value)
    }

    const [selectTime, setSelectTime] = React.useState('ds,bhtnt');
    const onChangeSelectTime = (e) => {
        setSelectTime(e.target.value)
    }
    // чекбокс я сам получу заказ
    const [checkbox, SetCheckbox] = React.useState(false);
    // чекбокс в течении трех часов после оплаты
    const [checkboxTheeHouers, SetCheckboxTheeHouers] = React.useState(false);

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
                    <p className='order__list-title'><span className='order__list-title-span'>ваш заказ</span> в г.Москва с доставкой на сумму <span className='order__list-title-span'>1500₽</span> </p>
                    <>
                        {orderCard.map((item) => <OrderProductCard image={item.image} title={item.title} price={item.price} />)}
                    </>
                </div>
                <div className='order__check-box-container'>
                    <BasketCheckBox image={image} text={'Добавьте открытку -'} textSpan={'бесплатно!'} qestionInformation={'вопрос'} />
                    <BasketCheckBox image={fotoapparat} text={'Фото при получении -'} textSpan={'бесплатно!'} qestionInformation={'вопрос'} />
                    <BasketCheckBox image={fotoapparat} text={'Фото букета до доставки -'} textSpan={'бесплатно!'} qestionInformation={'вопрос'} />
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
                                <input className='input' type="text" value={adress || ''} disabled onChange={onChangeAdress} placeholder='Уточнить адрес и время доставки' />
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
                                <input className='input input__date' type="date" value={date || ''} onChange={onChangeDate} />
                            </div>
                            <img className='order__form-input-icon' src={calendar} alt="иконка" />
                        </div>
                        <div className="input-width">
                            <div className="width-setter">
                                <p className='width-setter-text'>Время доставки</p>
                                <select className='select' value={selectTime || ''} onChange={onChangeSelectTime}>
                                    <option value="grapefruit">утро (10:00-12:00)</option>
                                    <option value="lime">день (12:00 - 18:00)</option>
                                    <option value="coconut">вечер (18:00 - 22:00)</option>
                                    <option value="mango">ночь (22:00 - 02:00)</option>
                                </select>
                            </div>
                            <img className='order__form-input-icon ' src={telephone} alt="иконка" />
                        </div>
                        <div className='order__form-title-checkbox-container'>
                            <input className='order__form-checkbox-delivery' type="checkbox" checked={checkboxTheeHouers} onChange={() => { SetCheckboxTheeHouers(!checkboxTheeHouers) }} />
                            <p className='order__form-checkbox-text-delivery'>В течение 3-х часов после оплаты заказа</p>
                        </div>
                    </div>
                    <div className='order__form-title-container'>
                        <h2 className='order__form-title'>АДРЕС ДОСТАВКИ (+ ВАШИ ПОЖЕЛАНИЯ К ЗАКАЗУ)</h2>
                    </div>
                    <div className='order__form-input-container-two'>
                        <div className='input__container'>
                            <div className="input-city">
                                <select className='select select-city' value={selectTime || ''} onChange={onChangeSelectTime}>
                                    <option value="grapefruit">Москва</option>
                                    <option value="lime">Тюмень</option>
                                    <option value="coconut">Томск</option>
                                    <option value="mango">Омск</option>
                                </select>
                            </div>

                            <div className="width-setter width-seter_adress">
                                <input className='input input_adress' type="text" value={date || ''} onChange={onChangeDate} />
                            </div>

                        </div>
                        <div className='order__form-title-checkbox-container'>
                            <input className='order__form-checkbox-delivery' type="checkbox" checked={checkboxTheeHouers} onChange={() => { SetCheckboxTheeHouers(!checkboxTheeHouers) }} />
                            <p className='order__form-checkbox-text-delivery'>В течение 3-х часов после оплаты заказа</p>
                        </div>
                    </div>
                </form>

            </section>
        </>
    );
}

export default BasketOrderRegistration;
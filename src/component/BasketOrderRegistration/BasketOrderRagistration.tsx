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
                            <input className='order__form-checkbox' type="checbox" />
                            <p className='order__form-checkbox-text'>Я САМ ПОЛУЧУ ЗАКАЗ</p>
                        </div>
                    </div>
                    <div className='order__form-input-container'>
                        <div className="input-width">
                            <div className="width-setter">
                                <input type="text" value={phone || ''} onChange={onChangePhone} placeholder='Ваш телефон' />
                            </div>
                            <img className='order__form-input-icon' src={telephone} alt="иконка" />
                        </div>
                        <div className="input-width">
                            <div className="width-setter">
                                <input type="text" value={emailValue || ''} onChange={onChangeEmail} placeholder='Ваш е-mail' />
                            </div>
                            <img className='order__form-input-icon' src={email} alt="иконка" />
                        </div>
                        <div className="input-width">
                            <div className="width-setter">
                                <input type="text" value={name || ''} onChange={onChangeName} placeholder='Ваше имя' />
                            </div>
                            <img className='order__form-input-icon' src={people} alt="иконка" />
                        </div>
                    </div>
                </form>

            </section>
        </>
    );
}

export default BasketOrderRegistration;
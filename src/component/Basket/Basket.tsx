import Header from '../Header/Header';
import './Basket.scss';
import BasketProductCard from './BasketProductCard/BasketProductCard';
import { basketCard } from '../../utils/constantsBasketPage';
import image from '../../img/image.svg';
import fotoapparat from '../../img/fotoapparat.svg';
import BasketCheckBox from './BasketCheckBox/BasketCheckBox';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Basket() {
    const navigate = useNavigate();
    function getOrder() {
        navigate('/order');
    }

    const [summOrder, setSummOrder] = React.useState(0);

    React.useEffect(() => {
        const arr = [0];
        basketCard.forEach((i) => {
            arr.push(i.price);
        })
        const summ = arr.reduce((a, b) => { return a + b });
        setSummOrder(summ);
    }, [])



    return (
        <>
            <Header />
            <section className="basket">
                <div className="basket__truckBuy">
                    <div className="basket__header-container">
                        <p className="basket__header-text">Корзина</p>
                        <p className="basket__header-text basket__header-text_gray">Оформление заказа</p>
                        <p className="basket__header-text basket__header-text_gray">Оплата</p>
                    </div>
                    <div className='basket__indication-container'>
                        <div className='basket__one'>1</div>
                        <div className='basket__one basket__two'>2</div>
                        <div className='basket__one basket__two'>3</div>
                        <div className='basket__line'></div>
                    </div>
                    <div className='basket__form'>
                        <div className='basket__products-list'>
                            <>
                                {basketCard.map((item) => <BasketProductCard summOrder={summOrder} setSummOrder={setSummOrder} key={item.id} id={item.id} image={item.image} text={item.text} width={item.width} height={item.heigth} price={item.price} />)}
                            </>
                        </div>
                        <div className='basket__result-price-container'>
                            <div className='basket__diskounts'>
                                <div className='basket__diskounts-header'>
                                    <h3 className='basket__discounts-title basket__discounts-title_active'>Бонусы</h3>
                                    <h3 className='basket__discounts-title'>Ввести промокод</h3>
                                    <h3 className='basket__discounts-title'>Сбросить скидку</h3>
                                </div>
                                <div className='basket__diskounts-block'>
                                    <div className='basket__diskounts-text-discount-container'>
                                        <h2 className='basket__diskounts-text-discount'>Вам будет зачислено <span className='basket__diskounts-text-discount-span'>{summOrder * 0.03} рублей</span></h2>
                                        <h2 className='basket__diskounts-text-discount'> (<span className='basket__diskounts-text-discount-span'>3%</span> от стоимости заказа)</h2>
                                    </div>
                                    <div className='basket__diskounts-text-discount-percent-container'>
                                        <h2 className='basket__diskounts-text-discount-percent'>3</h2>
                                        <h2 className='basket__diskounts-text-discount-percent basket__diskounts-text-discount-percent-span'>%</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='basket__result'>
                                <div className='basket__result-position'>
                                    <p className='basket__result-position-text'>Итого по позициям:</p>
                                    <p className='basket__result-position-text-rigth'>{summOrder} ₽</p>
                                </div>
                                <div className='basket__result-position'>
                                    <p className='basket__result-position-text'>Доставка в г. <span className='basket__result-position-text-span'>Москва</span></p>
                                    <p className='basket__result-position-text-rigth'>бесплатно</p>
                                </div>
                                <div className='basket__result-position'>
                                    <p className='basket__result-position-text'>Итого:</p>
                                    <p className='basket__result-position-text-rigth-result'>{summOrder} ₽</p>
                                </div>
                            </div>
                        </div>
                        <div className='basket__check-box-container'>
                            <BasketCheckBox image={image} text={'Добавьте открытку -'} textSpan={'бесплатно!'} qestionInformation={'вопрос'} />
                            <BasketCheckBox image={fotoapparat} text={'Фото при получении -'} textSpan={'бесплатно!'} qestionInformation={'вопрос'} />
                            <BasketCheckBox image={fotoapparat} text={'Фото букета до доставки -'} textSpan={'бесплатно!'} qestionInformation={'вопрос'} />
                        </div>
                        <button className='basket__final-button' onClick={getOrder}>Оформить заказ</button>
                    </div>
                </div>

            </section>
        </>
    );
}


export default Basket;
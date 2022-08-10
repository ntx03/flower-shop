import Header from '../Header/Header';
import './Basket.scss';
import BasketProductCard from './BasketProductCard/BasketProductCard';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../src/hooks';


function Basket() {
    const navigate = useNavigate();

    // времянка
    function getOrder() {
        basketState.length < 1 ? alert('Для оформления заказа вам нужно выбрать товар!') : navigate('/order');
    }
    // берем данные товара, который выбрал покупатель
    const basketState = useAppSelector(state => state.basket.basketState);

    // суммируем общую цену в корзине
    const [summOrder, setSummOrder] = React.useState(0);

    // суммируем все цены из массива корзины
    React.useEffect(() => {
        const arr = [0];
        basketState.forEach((i) => {
            arr.push(i.price * i.counter);
        })
        const summ = arr.reduce((a, b) => { return a + b });
        setSummOrder(summ);
    }, [basketState])

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
                                {basketState.map((item) => <BasketProductCard counterState={Number(item.counter)} summOrder={summOrder} setSummOrder={setSummOrder} key={item.id} id={item.id} image={item.image} text={item.text} width={item.width} height={item.height} price={item.price} />)}
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
                        <button className='basket__final-button' onClick={getOrder}>Оформить заказ</button>
                    </div>
                </div>

            </section>
        </>
    );
}


export default Basket;
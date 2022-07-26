import Header from '../Header/Header';
import './Basket.scss';
import BasketProductCard from './BasketProductCard/BasketProductCard';
import { basketCard } from '../../utils/constantsBasketPage';
import image from '../../img/image.svg';
import fotoapparat from '../../img/fotoapparat.svg';


function Basket() {
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
                    <form className='basket__form'>
                        <div className='basket__products-list'>
                            <>
                                {basketCard.map((item) => <BasketProductCard image={item.image} text={item.text} width={item.width} height={item.heigth} price={item.price} />)}
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
                                        <h2 className='basket__diskounts-text-discount'>Вам будет зачислено <span className='basket__diskounts-text-discount-span'>225 рублей</span></h2>
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
                                    <p className='basket__result-position-text-rigth'>1 500 ₽</p>
                                </div>
                                <div className='basket__result-position'>
                                    <p className='basket__result-position-text'>Доставка в г. <span className='basket__result-position-text-span'>Москва</span></p>
                                    <p className='basket__result-position-text-rigth'>бесплатно</p>
                                </div>
                                <div className='basket__result-position'>
                                    <p className='basket__result-position-text'>Итого:</p>
                                    <p className='basket__result-position-text-rigth-result'>1 500 ₽</p>
                                </div>
                            </div>
                        </div>
                        <div className='basket__check-box-container'>
                            <div className='basket__check-box-item'>
                                <img className='basket__check-box-item-image' src={image} alt="иконка карточки" />
                                <input type='checkbox' className='basket__check-box-item-checkbox' />
                                <p className='basket__check-box-item-text'>Добавьте открытку - <span className='basket__check-box-item-text-span'>бесплатно!</span></p>
                                <p className='basket__check-box-item-information' title='вопрос'>?</p>
                            </div>
                            <div className='basket__check-box-item'>
                                <img className='basket__check-box-item-image' src={fotoapparat} alt="иконка карточки" />
                                <input type='checkbox' className='basket__check-box-item-checkbox' />
                                <p className='basket__check-box-item-text'>Фото при получении - <span className='basket__check-box-item-text-span'>бесплатно!</span></p>
                                <p className='basket__check-box-item-information' title='вопрос'>?</p>
                            </div>
                            <div className='basket__check-box-item'>
                                <img className='basket__check-box-item-image' src={fotoapparat} alt="иконка карточки" />
                                <input type='checkbox' className='basket__check-box-item-checkbox' />
                                <p className='basket__check-box-item-text'>Фото букета до доставки - <span className='basket__check-box-item-text-span'>бесплатно!</span></p>
                                <p className='basket__check-box-item-information' title='вопрос'>?</p>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
        </>
    );
}


export default Basket;
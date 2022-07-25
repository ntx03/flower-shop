import one from '../../img/one.svg';
import Header from '../Header/Header';
import './Basket.scss';

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
                        <div className='basket__products-container'></div>
                    </form>
                </div>

            </section>
        </>
    );
}


export default Basket;
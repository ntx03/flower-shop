import React, { useEffect } from "react";
import './Header.scss';
import { Link } from 'react-router-dom';
import icon from '../../img/icon_office.svg';
import { useDispatch } from 'react-redux';
import main_lable from '../../img/main__lable.svg';
import heart from '../../img/heart_icon.svg';
import telephone from '../../img/telephone_icon.svg';
import search from '../../img/search-interface-symbol_icon.svg';
import basket from '../../img/header_basket.svg';
import burger from '../../img/burger.svg';
import mobile_lable from '../../img/mobile_lable.svg';
import seven from '../../img/24_7.svg';
import search_white from '../../img/search_wait.svg';
import basket_white from '../../img/basket_wait.svg';
import heart_white from '../../img/heart_wait.svg';
import { useAppSelector } from "../../hooks";
import { trueNavigation } from '../../store/counterSlise';

function Header() {
    const basketState = useAppSelector(state => state.basket.basketState);
    const dispatch = useDispatch();
    const [productBasketLength, setProductBasketLength] = React.useState(false);
    React.useEffect(() => {
        basketState.length < 1 ? setProductBasketLength(false) : setProductBasketLength(true);
    }, [basketState.length])

    const showProductBasketSumm = () => {
        return basketState.length > 99 ? 99 : basketState.length;
    }
    return (
        <section className="header">
            <div className="header__up">
                <nav>
                    <ul className="header__navigation">
                        <li className="header__li"><a className="header__navigation-link">Контакты</a></li>
                        <li className="header__li"><a className="header__navigation-link">О нас</a></li>
                        <li className="header__li"><a className="header__navigation-link">Доставка</a></li>
                        <li className="header__li"><a className="header__navigation-link">Политика безопасности</a></li>
                        <li className="header__li"><a className="header__navigation-link">Условия соглашения</a></li>
                    </ul>
                </nav>
                <div className="header__office">
                    <Link to={'/'} className='header__office-text'>Личный кабинет</Link>
                    <img src={icon} className="header__office-icon" alt='изображение человека' />

                </div>
            </div>
            <div className="header__lable">
                <Link to={'/'}><img className='header__lable-icon' src={main_lable} alt="лэйбл флористмэн" /></Link>
                <div className="header__lable-container">
                    <div className="header__lable-adress-container">
                        <h3 className="header__lable-adress-container-title">Адрес магазина</h3>
                        <p className="header__lable-adress-container-text"> г. Москва</p>
                    </div>
                    <div className="header__lable-office-container">
                        <h3 className="header__lable-office-container-title">Адрес магазина</h3>
                        <div className="header__lable-office-container-text">
                            <img className="header__lable-office-container-text-icon" src={telephone} alt="иконка с телефоном" />
                            <p className="header__lable-office-container-text-text">+7 968 765-70-07</p>
                        </div>
                    </div>
                </div>
                <div className="header__lable-icon-container">
                    <Link to={'/'} ><img className='header__lable-icon-mini' src={search} alt="иконка поиска по сайту" /></Link>
                    <Link to={'/basket'} className='header__lable-icon-mini-container'><p className={productBasketLength ? "header__lable-icon-mini-text" : "header__lable-icon-mini-text_none"}>{showProductBasketSumm()}</p><img className='header__lable-icon-mini' src={basket} alt="иконка корзины" /></Link>
                    <Link to={'/'} ><img className='header__lable-icon-mini' src={heart} alt="иконка лайка" /></Link>
                </div>
            </div>
            <div className="header__bottom">
                <Link to='/flowers' className='header__bottom-link'>Цветы</Link>
                <Link to={'/gifts'} className='header__bottom-link'>Подарки</Link>
                <Link to={'/frutsBasket'} className='header__bottom-link'>Фруктовые корзины</Link>
                <Link to={'/balloons'} className='header__bottom-link'>Воздушные шарики</Link>
                <Link to={'/plants'} className='header__bottom-link'>Комнатные растения</Link>
                <Link to={'/sweets'} className='header__bottom-link'>Сладости</Link>
                <Link to={'/services'} className='header__bottom-link'>Услуги</Link>
                <Link to={'/accessories'} className='header__bottom-link'>Аксессуары</Link>
            </div>
            <div className="header__mobile">
                <div className="header__mobile-lable-container">
                    <button className="header__mobile-button" onClick={() => dispatch(trueNavigation())}> <img className='header__mobile-burger' src={burger} alt="иконка меню" /></button>
                    <img className="header__mobile-lable" src={mobile_lable} alt="лэйбл флористмэн" />
                </div>
                <div className="header__mobile-icon-container">
                    <Link to={'/'} className='header__mobile-icon-link'> <img className='header__mobile-icon' src={search_white} alt="иконка поиска по сайту" /></Link>
                    <Link to={'/basket'} className='header__mobile-icon-link'><img className='header__mobile-icon' src={basket_white} alt="иконка корзины" /></Link>
                    <Link to={'/'} className='header__mobile-icon-link'><img className='header__mobile-icon' src={heart_white} alt="иконка лайка" /></Link>
                </div>
            </div>
            <div className="header__contacts">
                <div className="header__contacts-text-container">
                    <h4 className="header__contacts-text">Доставка цветов
                        по Москве и МО</h4>
                    <img className="header__contacts-image" alt='работаем 24 на 7' src={seven} />
                </div>
                <div className="header__contacts-telephone-container">
                    <p className="header__contacts-telephone">+7 965 765-70-07</p>
                    <p className="header__contacts-telephone">+7 925 965-70-07</p>
                </div>
            </div>
        </section>
    );
}

export default Header;
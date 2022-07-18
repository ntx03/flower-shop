import React from "react";
import './Header.scss';
import { Link } from 'react-router-dom';
import icon from '../../img/icon_office.svg';
//const icon = require('../../img/icon_office.svg');
import main_lable from '../../img/main__lable.svg';
import heart from '../../img/heart_icon.svg';
import telephone from '../../img/telephone_icon.svg';
import search from '../../img/search-interface-symbol_icon.svg';
import basket from '../../img/icon_office.svg';


function Header() {
    console.log(icon);
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
                <img className='header__lable-icon' src={main_lable} alt="лэйбл флористмэн " />
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
                    <img className='header__lable-icon-mini' src={search} alt="иконка поиска по сайту" />
                    <img className='header__lable-icon-mini' src={basket} alt="иконка корзины" />
                    <img className='header__lable-icon-mini' src={heart} alt="иконка лайка" />
                </div>
            </div>
            <div className="header__bottom">
                <Link to={'/'} className='header__bottom-link'>Цветы</Link>
                <Link to={'/'} className='header__bottom-link'>Подарки</Link>
                <Link to={'/'} className='header__bottom-link'>Фруктовые корзины</Link>
                <Link to={'/'} className='header__bottom-link'>Воздушные шарики</Link>
                <Link to={'/'} className='header__bottom-link'>Комнатные растения</Link>
                <Link to={'/'} className='header__bottom-link'>Сладости</Link>
                <Link to={'/'} className='header__bottom-link'>Услуги</Link>
                <Link to={'/'} className='header__bottom-link'>Аксессуары</Link>
            </div>
        </section>
    );
}

export default Header;
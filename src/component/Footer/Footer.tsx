import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';
import telephone from '../../img/telephone_footer.svg';
import apple_pay from '../../img/apple-pay.svg';
import google_pay from '../../img/g_pay.svg';
import mastercard from '../../img/master_card.svg';
import peace from '../../img/peace.svg';
import pay_pal from '../../img/pay_pal.svg';
import qivi from '../../img/qivi.svg';
import pay from '../../img/pay.svg';
import sber from '../../img/sber.svg';
import visa from '../../img/visa.svg';
import web_money from '../../img/web_money.svg';
import youtube from '../../img/youtube.svg';
import viber from '../../img/viber.svg';
import telegram from '../../img/telegram.svg';
import instagram from '../../img/instagram.svg';
import tik from '../../img/tik-tok.svg';

function Footer() {
    return (
        <section className="footer">
            <div className="footer__container">
                <div className="footer__menu">
                    <div className="footer__menu-information">
                        <h3 className="footer__menu-title">Информация</h3>
                        <Link to={'/'} className="footer__menu-link">О нас</Link>
                        <Link to={'/'} className="footer__menu-link">Доставка</Link>
                        <Link to={'/'} className="footer__menu-link">Политика безопасности</Link>
                        <Link to={'/'} className="footer__menu-link">Условия соглашения</Link>
                    </div>
                    <div className="footer__menu-information">
                        <h3 className="footer__menu-title">Каталог</h3>
                        <Link to={'/'} className="footer__menu-link">Цветы</Link>
                        <Link to={'/'} className="footer__menu-link">Подарки</Link>
                        <Link to={'/'} className="footer__menu-link">Фруктовые корзины</Link>
                        <Link to={'/'} className="footer__menu-link">Воздушные шарики</Link>
                        <Link to={'/'} className="footer__menu-link">Комнатные растения</Link>
                        <Link to={'/'} className="footer__menu-link">Услуги</Link>
                        <Link to={'/'} className="footer__menu-link">Аксессуары</Link>
                    </div>
                    <div className="footer__menu-information">
                        <h3 className="footer__menu-title">Личный кабинет</h3>
                        <Link to={'/'} className="footer__menu-link">Личный кабинет</Link>
                        <Link to={'/'} className="footer__menu-link">Корзина</Link>
                    </div>
                    <div className="footer__menu-information">
                        <h3 className="footer__menu-title">Адрес</h3>
                        <p className="footer__menu-text">г. Москва</p>
                    </div>
                    <div className="footer__menu-information">
                        <h3 className="footer__menu-title">Телефоны</h3>
                        <div className="footer__menu-telephone-container">
                            <img className="footer__menu-telephone-icon" alt="иконка телефона" src={telephone} />
                            <p className='footer__menu-telephone-text'>+7 968 765-70-07</p>
                        </div>
                        <div className="footer__menu-telephone-container">
                            <img className="footer__menu-telephone-icon" alt="иконка телефона" src={telephone} />
                            <p className='footer__menu-telephone-text'>+7 925 965-70-07</p>
                        </div>
                        <h3 className="footer__menu-title footer__menu-title-qestion">По любым вопросам</h3>
                        <p className="footer__menu-text-email">info@floristman.ru</p>
                    </div>
                </div>
                <div className="footer__footer">
                    <div className="footer__footer-container-icon">
                        <div className="footer__footer-container">
                            <img className="footer__footer-icon" alt="иконка" src={apple_pay} />
                            <img className="footer__footer-icon" alt="иконка" src={google_pay} />
                            <img className="footer__footer-icon" alt="иконка" src={mastercard} />
                            <img className="footer__footer-icon" alt="иконка" src={peace} />
                            <img className="footer__footer-icon" alt="иконка" src={qivi} />
                        </div>
                        <div className="footer__footer-container">
                            <img className="footer__footer-icon" alt="иконка" src={pay} />
                            <img className="footer__footer-icon" alt="иконка" src={sber} />
                            <img className="footer__footer-icon" alt="иконка" src={visa} />
                            <img className="footer__footer-icon" alt="иконка" src={web_money} />

                        </div>
                    </div>
                    <div className="footer__footer-container-icon-message">
                        <a href="#" target='_blank' rel="noreferrer" className="footer__footer-icon-message"><img alt="иконка" className="footer__footer-i" src={youtube} /></a>
                        <a href="#" target='_blank' rel="noreferrer" className="footer__footer-icon-message"><img alt="иконка" className="footer__footer-i" src={viber} /></a>
                        <a href="#" target='_blank' rel="noreferrer" className="footer__footer-icon-message"><img alt="иконка" className="footer__footer-i" src={telegram} /></a>
                        <a href="#" target='_blank' rel="noreferrer" className="footer__footer-icon-message"><img alt="иконка" className="footer__footer-i" src={instagram} /></a>
                        <a href="#" target='_blank' rel="noreferrer" className="footer__footer-icon-message"><img alt="иконка" className="footer__footer-i" src={tik} /></a>
                    </div>
                </div>
                <h3 className="footer__copyright">FloristMan © 2022</h3>
            </div>
        </section>
    );
}

export default Footer;
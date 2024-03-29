import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import user from '../../img/user_navigation.svg';
import lable from '../../img/main__lable.svg';
import { useDispatch } from 'react-redux';
import { falseNavigation } from '../../store/counterSlise';

function Navigation({ isOpen }) {
    const dispatch = useDispatch();
    return (
        <section className={isOpen ? 'navigation_open' : 'navigation'}>
            <div className='navigation__container'>
                <Link to={'/'} onClick={() => dispatch(falseNavigation())}><img className='navigation__lable' src={lable} alt='логотип флористмэн' /></Link>
                <div className='navigation__office-container'>
                    <Link to={'/'} onClick={() => dispatch(falseNavigation())} className='navigation__office-text'>Войти</Link>
                    <img src={user} className='navigation__icon-office' alt='иконка личного кабинета' />
                </div>
                <div className='navigation__container-link'>
                    {/* <div className='navigation__link-box'> */}
                    <Link to='/flowers' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Цветы</Link>
                    {/* </div> */}
                    <Link to='/gifts' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Подарки</Link>
                    <Link to='/frutsBasket' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Фруктовые корзины</Link>
                    <Link to='/balloons' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Воздушные шарики</Link>
                    <Link to='/plants' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Комнатные растения</Link>
                    <Link to='/sweets' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Сладости</Link>
                    <Link to='/services' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Услуги</Link>
                    <Link to='/accessories' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Аксессуары</Link>
                    <Link to='/#portfolio' onClick={() => dispatch(falseNavigation())} className='navigation__link'>О нас</Link>
                    <Link to='/#footer' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Доставка</Link>
                    <Link to='/#portfolio' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Политика конфиденциальности</Link>
                    <Link to='/#footer' onClick={() => dispatch(falseNavigation())} className='navigation__link'>Условия соглашения</Link>
                </div>

            </div>

        </section>
    );
}


export default Navigation;
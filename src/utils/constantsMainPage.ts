import flowers from '../img/flowers.svg';
import tort from '../img/tort.svg';
import ball from '../img/air_ball.svg';
import fruts from '../img/frut.svg';
import gifts from '../img/gifts.svg';
import plants from '../img/plants.svg';
import servises from '../img/servises.svg';
import accessories from '../img/accessories.svg';
import stock_flowers from '../img/stock_flower.svg';

interface defaultStateShema {
    link: string,
    image: string,
    name: string,
}

export const mainCardProducts: defaultStateShema[] = [
    {
        link: '/flowers',
        image: flowers,
        name: 'цветы',
    },
    {
        link: '/',
        image: ball,
        name: 'Воздушные шарики',
    },
    {
        link: '/',
        image: tort,
        name: 'Сладости',
    },
    {
        link: '/',
        image: fruts,
        name: 'Фруктовые корзины',
    },
    {
        link: '/',
        image: plants,
        name: 'Комнатные растения',
    },
    {
        link: '/',
        image: gifts,
        name: 'Подарки',
    },
    {
        link: '/',
        image: servises,
        name: 'Услуги',
    },
    {
        link: '/',
        image: accessories,
        name: 'Аксессуары',
    },
]


interface cardStockShema {
    price: string,
    priseOld: string,
    image: string,
    text: string,
}

export const cardStock: cardStockShema[] = [
    {
        price: '1500 ₽',
        priseOld: '2000 ₽',
        image: stock_flowers,
        text: 'Корзина роз yf pfrfop e ntnb rkfhs',
    },
    {
        price: '1500 ₽',
        priseOld: '2000 ₽',
        image: stock_flowers,
        text: 'Корзина роз ',
    },
    {
        price: '1500 ₽',
        priseOld: '2000 ₽',
        image: stock_flowers,
        text: 'Корзина роз ',
    },
    {
        price: '1500 ₽',
        priseOld: '2000 ₽',
        image: stock_flowers,
        text: 'Корзина роз yf pfrfop e ntnb rkfhs',
    },
    {
        price: '1500 ₽',
        priseOld: '2000 ₽',
        image: stock_flowers,
        text: 'Корзина роз yf pfrfop e ntnb rkfhs',
    },
    {
        price: '1500 ₽',
        priseOld: '2000 ₽',
        image: stock_flowers,
        text: 'Корзина роз yf pfrfop e ntnb rkfhs',
    },
    {
        price: '1500 ₽',
        priseOld: '2000 ₽',
        image: stock_flowers,
        text: 'Корзина роз yf pfrfop e ntnb rkfhs',
    },
    {
        price: '1500 ₽',
        priseOld: '2000 ₽',
        image: stock_flowers,
        text: 'Корзина роз yf pfrfop e ntnb rkfhs',
    },
]

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
    id: number
}

export const mainCardProducts: defaultStateShema[] = [
    {
        link: '/flowers',
        image: flowers,
        name: 'цветы',
        id: Math.round(0.016256866561892513 * 100000000)
    },
    {
        link: '/balloons',
        image: ball,
        name: 'Воздушные шарики',
        id: Math.round(0.7393343584456822 * 100000000)
    },
    {
        link: '/sweets',
        image: tort,
        name: 'Сладости',
        id: Math.round(0.38845178462134644 * 100000000)
    },
    {
        link: '/frutsBasket',
        image: fruts,
        name: 'Фруктовые корзины',
        id: Math.round(
            0.2028335605393885 * 100000000)
    },
    {
        link: '/plants',
        image: plants,
        name: 'Комнатные растения',
        id: Math.round(0.1156195654962553 * 100000000)
    },
    {
        link: '/gifts',
        image: gifts,
        name: 'Подарки',
        id: Math.round(0.9281705689962085 * 100000000)
    },
    {
        link: '/services',
        image: servises,
        name: 'Услуги',
        id: Math.round(0.012093668440655403 * 100000000)
    },
    {
        link: '/accessories',
        image: accessories,
        name: 'Аксессуары',
        id: Math.round(0.05837854537571041 * 100000000)
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

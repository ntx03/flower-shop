import flowers from '../img/flowers.svg';
import tort from '../img/tort.svg';
import ball from '../img/air_ball.svg';
import fruts from '../img/frut.svg';
import gifts from '../img/gifts.svg';
import plants from '../img/plants.svg';
import servises from '../img/servises.svg';
import accessories from '../img/accessories.svg';
import { productCardShema } from '../utils/constantsFlowersPage';
import flowers1 from '../img/flowers/1.jpg';
import flowers1_1 from '../img/flowers/1-1.jpg';
import flowers2_1 from '../img/flowers/2-1.webp';
import flowers3_1 from '../img/flowers/3-1.jpg';
import flowers4_1 from '../img/flowers/4-1.webp';
import flowers5_1 from '../img/flowers/5-1.webp';
import flowers5_2 from '../img/flowers/5-2.jpg';
import flowers5_3 from '../img/flowers/5-3.jpg';

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

export const cardStock: productCardShema[] = [
    {
        price: 1000,
        priseOld: '1100 ₽',
        image: flowers1,
        text: 'Корзина фиолетово-красных роз',
        width: 60,
        height: 40,
        id: Math.round(0.32717058908558465 * 100000000),
        minProduct: 1,
    },
    {
        price: 1500,
        priseOld: '2000 ₽',
        image: flowers1_1,
        text: 'Букет из роз с оформлением',
        width: 30,
        height: 20,
        id: Math.round(0.32717058908554444 * 100000000),
        minProduct: 1,
    },
    {
        price: 2000,
        priseOld: '2500 ₽',
        image: flowers2_1,
        text: 'Букет комбинированных по цвету роз',
        width: 50,
        height: 40,
        id: Math.round(0.327170584852108558465 * 100000000),
        minProduct: 1,
    },
    {
        price: 999,
        priseOld: '2500 ₽',
        image: flowers3_1,
        text: 'Букет розовых роз',
        width: 30,
        height: 30,
        id: Math.round(0.32717058908551165 * 100000000),
        minProduct: 1,
    },
    {
        price: 1400,
        priseOld: '2500 ₽',
        image: flowers4_1,
        text: 'Букет красно-белых роз',
        width: 40,
        height: 40,
        id: Math.round(0.327170589012453558465 * 100000000),
        minProduct: 1,
    },
    {
        price: 3000,
        priseOld: '3500 ₽',
        image: flowers5_1,
        text: 'Букет розовых роз с оформлением хризантемами',
        width: 70,
        height: 60,
        id: Math.round(0.32717054561208558465 * 100000000),
        minProduct: 1,
    },
    {
        price: 1999,
        priseOld: '2100 ₽',
        image: flowers5_2,
        text: 'Букет из роз с оформлением',
        width: 30,
        height: 20,
        id: Math.round(0.32717058908558465 * 100000000),
        minProduct: 1,
    },
    {
        price: 2199,
        priseOld: '2500 ₽',
        image: flowers5_3,
        text: 'Букет из роз',
        width: 30,
        height: 20,
        id: Math.round(0.32717058908558465 * 100000000),
        minProduct: 1,
    },
]

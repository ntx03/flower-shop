import gifts from '../img/gifts/gift.jpg';
import gifts2 from '../img/gifts/gift2.jpg';
import gifts3 from '../img/gifts/gift3.jpeg';
import { productCardShema } from './constantsFlowersPage';



export const productCardGifts: productCardShema[] = [
    {
        image: gifts,
        image2: gifts2,
        image3: gifts3,
        text: 'Мягкая игрушка с животными',
        width: 40,
        height: 60,
        price: 5000,
        priseOld: '5500 ₽',
        id: Math.round(0.3271705890857328 * 100000000),
        minProduct: 1,
        color: ['Песик', "Енотик", "Львенок"],
        otherServices: [
            {
                price: 0,
                text: 'без дополнительного оформления - 0 руб'
            },
            {
                price: 200,
                text: 'Оформление бантом - 200 руб.'
            },
            {
                price: 1000,
                text: 'Оформление праздничной коробкой с бантом - 1000 руб.'
            }],
        reviews: [
            {
                name: 'Andrey',
                text: 'Товар отличного качества!'
            },
            {
                name: 'Катя',
                text: 'Очень красивая и качественная магкая игрушка! Ребенку очень понравилось!'
            },
            {
                name: 'Павел',
                text: 'Купил львенка - ребенок просто в восторге!'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },

]

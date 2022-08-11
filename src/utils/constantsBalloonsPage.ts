import ballon from '../img/ballons/ballon.jpg';
import ballon_2 from '../img/ballons/ballon_2.jpg';
import ballon_3 from '../img/ballons/ballon_3.jpg';
import { productCardShema } from './constantsFlowersPage';

export const productCardBalloons: productCardShema[] = [
    {
        image: ballon,
        image2: ballon_2,
        image3: ballon_3,
        text: 'Воздушные шары фольгированные (9шт)',
        width: 21,
        height: 53,
        price: 1000,
        priseOld: '2000 ₽',
        id: Math.round(0.3271705890857328 * 100000000),
        minProduct: 1,
        color: ['Белый', "Розовый", "Фиолетовый"],
        otherServices: [
            {
                price: 0,
                text: 'без дополнительного оформления - 0 руб'
            },
            {
                price: 400,
                text: '+ 4 шара - 400 руб.'
            },
            {
                price: 800,
                text: '+ 8 шаров - 800 руб.'
            }],
        reviews: [
            {
                name: 'Andrey',
                text: 'Товар отличного качества!'
            },
            {
                name: 'Катя',
                text: 'Очень прикольно подобрали комбинацию шаров! Ребенку очень понравилось!'
            },
            {
                name: 'Павел',
                text: 'Отличные воздушные шары, за адекватную цену!'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },

]

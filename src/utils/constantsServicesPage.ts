import servises from '../img/servises/servises.jpg';
import servises2 from '../img/servises/servises2.jpg';
import servises3 from '../img/servises/servises3.jpg';
import { productCardShema } from './constantsFlowersPage';


export const productCardServises: productCardShema[] = [
    {
        image: servises,
        image2: servises2,
        image3: servises3,
        text: 'Нанесение надписей на цветы',
        width: 21,
        height: 53,
        price: 150,
        priseOld: '200 ₽',
        id: Math.round(0.3271705890857328 * 100000000),
        minProduct: 3,
        color: ['Белый', "Розовый", "Черный", 'Красный', 'Фиолетовый'],
        otherServices: [
            {
                price: 0,
                text: 'без дополнительного оформления - 0 руб'
            },
        ],
        reviews: [
            {
                name: 'Andrey',
                text: 'Моя подруга очень удивилась!'
            },
            {
                name: 'Катя',
                text: 'Коллеги на работе были в восторге!'
            },
            {
                name: 'Макс',
                text: 'Пришел в магазин, сдалали на моих цветах очень быстро!'
            },
        ]
    },
]

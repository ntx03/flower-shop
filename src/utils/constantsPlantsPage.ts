import plant from '../img/plants/plant.jpg';
import plant2 from '../img/plants/plant2.jpg';
import plant3 from '../img/plants/plant3.jpg';

import { productCardShema } from './constantsFlowersPage';

export const productCardPlants: productCardShema[] = [
    {
        image: plant,
        image2: plant2,
        image3: plant3,
        text: 'Фикус (комнатное растение)',
        width: 24,
        height: 60,
        price: 4000,
        priseOld: '4500 р',
        id: Math.round(0.3271705890857328 * 100000000),
        minProduct: 1,
        color: ['Гинсенг', "Мелкоплодный", "Разветвленный"],
        otherServices: [
            {
                price: 0,
                text: 'без дополнительного оформления - 0 руб'
            },
            {
                price: 1000,
                text: 'Подарочная коробка - 1000 руб.'
            },
        ],
        reviews: [
            {
                name: 'Andrey',
                text: 'Товар отличного качества!'
            },
            {
                name: 'Катя',
                text: 'Доставили в наилучшем виде!'
            },
            {
                name: 'Павел',
                text: 'Очень прикольные растения, за адекватную цену!'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },
]

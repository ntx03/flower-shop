import tort from '../img/tort/tort.jpg';
import tort2 from '../img/tort/tort2.jpg';
import tort3 from '../img/tort/tort3.jpg';

import { productCardShema } from './constantsFlowersPage';

export const productCardTort: productCardShema[] = [
    {
        image: tort,
        image2: tort2,
        image3: tort3,
        text: 'Торт c бисквитной начинкой и ягодами',
        width: 20,
        height: 30,
        price: 2000,
        priseOld: '2500 ₽',
        id: Math.round(0.3271705890857328 * 100000000),
        minProduct: 1,
        color: ['шоколадный', "малиновый", "кремовый"],
        otherServices: [
            {
                price: 0,
                text: 'без дополнительного оформления - 0 руб'
            },
            {
                price: 400,
                text: 'украшение бантом - 400 руб.'
            },
        ],
        reviews: [
            {
                name: 'Andrey',
                text: 'Торт очень вкусный! Буду заказывать еще.'
            },

            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },
]

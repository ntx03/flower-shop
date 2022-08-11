import accessories from '../img/accessories.svg';
import scces from '../img/accessories/scces.jpg';
import scces_2 from '../img/accessories/scces_2.jpg'
import scces_3 from '../img/accessories/scces_3.jpg'

interface productCardShema {
    image: string,
    image2: string,
    image3: string,
    text: string,
    price: number,
    width: number,
    height: number,
    priseOld: string,
    id: number,
    minProduct: number,
    color: string[],
    reviews: {
        name: string,
        text: string
    }[],
    otherServices: {
        price: number,
        text: string
    }[],
}

export const productCardAccessories: productCardShema[] = [
    {
        image: scces,
        image2: scces_2,
        image3: scces_3,
        text: 'Часы наручные ORIENT',
        width: 10,
        height: 3,
        price: 59000,
        priseOld: '65000 ₽',
        id: Math.round(0.3271705890857328 * 100000000),
        minProduct: 1,
        color: ['Черный', "Коричневый", "Золотистый"],
        otherServices: [{
            price: 0,
            text: 'Подарочная упаковка - 0 руб.'
        },
        {
            price: 500,
            text: 'Кожанный ремешок - 500 руб.'
        },
        {
            price: 2000,
            text: 'Ручка Parker - 2000руб'
        }],
        reviews: [
            {
                name: 'Михаил',
                text: 'Часы отлдичного качества! Рекомендую!'
            },
            {
                name: 'Катя',
                text: 'Подарила мужу часы, он был очень доволен!'
            },
            {
                name: 'Павел',
                text: 'Случайно уронил часы на пол. Думал сломаются, но нет! Работают как часы:)'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро! Спасибо за работу!'
            },
        ]
    },
]

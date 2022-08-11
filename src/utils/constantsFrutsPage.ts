import frut from '../img/frutbasket/frut.jpg';
import frut2 from '../img/frutbasket/frut2.jpg';
import frut3 from '../img/frutbasket/frut3.jpg';

import { productCardShema } from './constantsFlowersPage';


export const productCardFrut: productCardShema[] = [
    {
        image: frut,
        image2: frut2,
        image3: frut3,
        text: 'Корзина с фруктами',
        width: 52,
        height: 28,
        price: 5600,
        priseOld: '6000 ₽',
        id: Math.round(0.3271705890857328 * 100000000),
        minProduct: 1,
        color: ['Белый', "коричневый", "черный"],
        otherServices: [
            {
                price: 0,
                text: 'без дополнительного наполнения - 0 руб'
            },
            {
                price: 800,
                text: '+ швейцарский шоколад  - 800 руб.'
            },
            {
                price: 3000,
                text: '+ + швейцарский шоколад и бутылка шампанского - 3000 руб.'
            }],
        reviews: [
            {
                name: 'Захар',
                text: 'Фррукты свежие, как на картинке! Рекомендую.'
            },
            {
                name: 'Маша Максимова',
                text: 'Оформили корзину очень красиво! Маме понравилось!'
            },
            {
                name: 'Павел',
                text: 'Подарил корзину с шампанским, девушке. Выпили вместе. Шампанское класс:)'
            },
            {
                name: 'Петр',
                text: 'У начальницы было день рождения. Заказал во флористмэне черную корзину с шоколадом. Она была приятно удивлина. Думаю проблем на работе будет меньше:) Спасибо за вашу работу!'
            },
        ]
    },
]

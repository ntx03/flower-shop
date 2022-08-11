import flowers1_1 from '../img/flowers/1-1.jpg';
import flowers1_2 from '../img/flowers/1-2.jpg';
import flowers1_3 from '../img/flowers/1-3.jpg';
import flowers1 from '../img/flowers/1.jpg';
import flowers2 from '../img/flowers/2.jpg';
import flowers3 from '../img/flowers/3.jpg';
import flowers2_1 from '../img/flowers/2-1.webp';
import flowers2_2 from '../img/flowers/2-2.jpg';
import flowers2_3 from '../img/flowers/2-3.jpg';
import flowers3_1 from '../img/flowers/3-1.jpg';
import flowers3_2 from '../img/flowers/3-2.jpg';
import flowers3_3 from '../img/flowers/3-3.jpg';
import flowers4_1 from '../img/flowers/4-1.webp';
import flowers4_2 from '../img/flowers/4-2.jpg';
import flowers4_3 from '../img/flowers/4-3.jpg';
import flowers5_1 from '../img/flowers/5-1.webp';
import flowers5_2 from '../img/flowers/5-2.jpg';
import flowers5_3 from '../img/flowers/5-3.jpg';


export interface productCardShema {
    image: string,
    image2: string,
    image3: string,
    text: string,
    price: number,
    width: number,
    height: number,
    priseOld?: string,
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

export const productCard: productCardShema[] = [
    {
        image: flowers1_1,
        image2: flowers1_2,
        image3: flowers1_3,
        text: 'Букет из роз с оформлением',
        width: 30,
        height: 20,
        price: 1500,
        priseOld: '2000 ₽',
        id: Math.round(0.3271705890857328 * 100000000),
        minProduct: 1,
        color: ['Фиолетовый', "Красный", "Розовый"],
        otherServices: [{
            price: 0,
            text: 'Прозрачная упаковка - 0 руб.'
        },
        {
            price: 100,
            text: 'Разноцветная пленка - 100 руб.'
        },
        {
            price: 500,
            text: 'Упаковка с оформлением - 500руб'
        }],
        reviews: [
            {
                name: 'Andrey',
                text: 'Товар отличного качества Товар отличного качества Товар отличного качества Товар отличного качества Товар отличного качества Товар отличного качества Товар отличного качества Товар отличного качества Товар отличного качества'
            },
            {
                name: 'Катя',
                text: 'Очень красивые цветы!'
            },
            {
                name: 'Павел',
                text: 'Огромный букет за нормальные деньги!'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },
    {
        image: flowers5_1,
        image2: flowers5_2,
        image3: flowers5_3,
        text: 'Букет розовых роз с оформлением хризантемами',
        minProduct: 1,
        color: ['Фиолетовый', "Красный", "Розовый"],
        price: 3000,
        width: 70,
        height: 60,
        priseOld: '3500 ₽',
        id: Math.round(0.8240955673406007 * 100000000),
        otherServices: [{
            price: 0,
            text: 'Прозрачная упаковка - 0 руб.'
        },
        {
            price: 100,
            text: 'Разноцветная пленка - 100 руб.'
        },
        {
            price: 500,
            text: 'Упаковка с оформлением - 500руб'
        }],
        reviews: [
            {
                name: 'Andrey',
                text: 'Товар отличного качества'
            },
            {
                name: 'Катя',
                text: 'Очень красивые цветы!'
            },
            {
                name: 'Павел',
                text: 'Огромный букет за нормальные деньги!'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },
    {
        image: flowers1,
        image2: flowers2,
        image3: flowers3,
        // image_1: require('../img/flowers.svg'),
        text: 'Корзина фиолетово-красных  роз',
        price: 1000,
        minProduct: 1,
        width: 60,
        height: 40,
        color: ['Фиолетовый', "Красный", "Розовый"],
        priseOld: '1100 ₽',
        id: Math.round(0.09562669685999192 * 100000000),
        otherServices: [{
            price: 0,
            text: 'Прозрачная упаковка - 0 руб.'
        },
        {
            price: 100,
            text: 'Разноцветная пленка - 100 руб.'
        },
        {
            price: 500,
            text: 'Упаковка с оформлением - 500руб'
        }],
        reviews: [
            {
                name: 'Andrey',
                text: 'Товар отличного качества'
            },
            {
                name: 'Катя',
                text: 'Очень красивые цветы!'
            },
            {
                name: 'Павел',
                text: 'Огромный букет за нормальные деньги!'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },
    {
        image: flowers2_1,
        image2: flowers2_2,
        image3: flowers2_3,
        text: 'Букет комбинированных по цвету роз',
        price: 2000,
        priseOld: '2500 ₽',
        minProduct: 1,
        width: 50,
        height: 40,
        color: ['Фиолетовый', "Красный", "Розовый"],
        id: Math.round(0.6714128464836873 * 100000000),
        otherServices: [{
            price: 0,
            text: 'Прозрачная упаковка - 0 руб.'
        },
        {
            price: 100,
            text: 'Разноцветная пленка - 100 руб.'
        },
        {
            price: 500,
            text: 'Упаковка с оформлением - 500руб'
        }],
        reviews: [
            {
                name: 'Andrey',
                text: 'Товар отличного качества'
            },
            {
                name: 'Катя',
                text: 'Очень красивые цветы!'
            },
            {
                name: 'Павел',
                text: 'Огромный букет за нормальные деньги!'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },
    {
        image: flowers3_1,
        image2: flowers3_2,
        image3: flowers3_3,
        text: 'Букет розовых роз',
        price: 999,
        priseOld: '2500 ₽',
        minProduct: 1,
        width: 30,
        height: 30,
        color: ['Фиолетовый', "Красный", "Розовый"],
        id: Math.round(0.4390360322151954 * 100000000),
        otherServices: [{
            price: 0,
            text: 'Прозрачная упаковка - 0 руб.'
        },
        {
            price: 100,
            text: 'Разноцветная пленка - 100 руб.'
        },
        {
            price: 500,
            text: 'Упаковка с оформлением - 500руб'
        }],
        reviews: [
            {
                name: 'Andrey',
                text: 'Товар отличного качества'
            },
            {
                name: 'Катя',
                text: 'Очень красивые цветы!'
            },
            {
                name: 'Павел',
                text: 'Огромный букет за нормальные деньги!'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },
    {
        image: flowers4_1,
        image2: flowers4_2,
        image3: flowers4_3,
        text: 'Букет красно-белых роз',
        price: 1400,
        priseOld: '2500 ₽',
        minProduct: 1,
        width: 40,
        height: 40,
        color: ['Фиолетовый', "Красный", "Розовый"],
        id: Math.round(0.8314979394159296 * 100000000),
        otherServices: [{
            price: 0,
            text: 'Прозрачная упаковка - 0 руб.'
        },
        {
            price: 100,
            text: 'Разноцветная пленка - 100 руб.'
        },
        {
            price: 500,
            text: 'Упаковка с оформлением - 500руб'
        }],
        reviews: [
            {
                name: 'Andrey',
                text: 'Товар отличного качества'
            },
            {
                name: 'Катя',
                text: 'Очень красивые цветы!'
            },
            {
                name: 'Павел',
                text: 'Огромный букет за нормальные деньги!'
            },
            {
                name: 'Макс',
                text: 'Доставили очень быстро!'
            },
        ]
    },
]

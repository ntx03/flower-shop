import flowers from '../img/flowers.svg';

interface productCardShema {
    image: string,
    //image_1: string,
    text: string,
    price: number,
    priseOld: string,
    id: number,
    reviews: {
        name: string,
        text: string
    }[]
}

export const productCard: productCardShema[] = [
    {
        image: flowers,
        //image_1: require('../img/flowers.svg'),
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.3271705890857328 * 100000000),
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
        image: flowers,
        // image_1: require('../img/flowers.svg'),
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.8240955673406007 * 100000000),
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
        image: flowers,
        // image_1: require('../img/flowers.svg'),
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.09562669685999192 * 100000000),
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
        image: flowers,
        // image_1: require('../img/flowers.svg'),
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.6714128464836873 * 100000000),
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
        image: flowers,
        // image_1: require('../img/flowers.svg'),
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.4390360322151954 * 100000000),
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
        image: flowers,
        //  image_1: require('../img/flowers.svg'),
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.8314979394159296 * 100000000),
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

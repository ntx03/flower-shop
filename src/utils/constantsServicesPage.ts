import servises from '../img/servises.svg';

interface productCardShema {
    image: string,
    text: string,
    price: number,
    priseOld: string,
    id: number
}

export const productCardServises: productCardShema[] = [
    {
        image: servises,
        text: 'Стилизация подарка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.5097864646277122 * 100000000)
    },
    {
        image: servises,
        text: 'Стилизация подарка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.6335226163522079 * 100000000)
    },
    {
        image: servises,
        text: 'Стилизация подарка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.13260955600062974 * 100000000)
    },
    {
        image: servises,
        text: 'Стилизация подарка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.04522059204668816 * 100000000)
    },
    {
        image: servises,
        text: 'Стилизация подарка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.12562807062617365 * 100000000)
    },
    {
        image: servises,
        text: 'Стилизация подарка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.30818684111752614 * 100000000)
    },
]

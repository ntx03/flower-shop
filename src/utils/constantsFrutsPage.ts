import frut from '../img/frut.svg';

interface productCardShema {
    image: string,
    text: string,
    price: number,
    priseOld: string,
    id: number
}

export const productCardFrut: productCardShema[] = [
    {
        image: frut,
        text: 'Фруктовая корзина',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.26008271750247136 * 100000000)
    },
    {
        image: frut,
        text: 'Фруктовая корзина',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.595402828102888 * 100000000)
    },
    {
        image: frut,
        text: 'Фруктовая корзина',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.014000158844964306 * 100000000)
    },
    {
        image: frut,
        text: 'Фруктовая корзина',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.9811300593709456 * 100000000)
    },
    {
        image: frut,
        text: 'Фруктовая корзина',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.1841074967936891 * 100000000)
    },
    {
        image: frut,
        text: 'Фруктовая корзина',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.41468545478283203 * 100000000)
    },
]

import flowers from '../img/flowers.svg';
import flowers_yellow from '../img/gifts.svg'


interface productBasketShema {
    image: string,
    text: string,
    price: string,
    width: string,
    heigth: string,
}

interface productOrderShema {
    image: string,
    title: string,
    price: string,
}

export const basketCard: productBasketShema[] = [
    {
        image: flowers,
        text: 'Корзина красных роз',
        price: '1500 ₽',
        width: '60 см',
        heigth: '40 см',
    },
    {
        image: flowers_yellow,
        text: 'Мишка',
        price: '3500 ₽',
        width: '70 см',
        heigth: '50 см',
    },
]

export const orderCard: productOrderShema[] = [
    {
        image: flowers,
        title: 'Корзина красных роз крупная',
        price: '1500 ₽',
    },
    {
        image: flowers,
        title: 'Корзина красных роз крупная',
        price: '5500 ₽',
    },
]


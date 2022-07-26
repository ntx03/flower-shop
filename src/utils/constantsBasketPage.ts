import flowers from '../img/flowers.svg';
import flowers_yellow from '../img/gifts.svg'


interface productBasketShema {
    image: string,
    text: string,
    price: string,
    width: string,
    heigth: string,
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

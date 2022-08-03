import flowers from '../img/flowers.svg';

interface productCardShema {
    image: string,
    text: string,
    price: number,
    priseOld: string,
    id: number
}

export const productCard: productCardShema[] = [
    {
        image: flowers,
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.3271705890857328 * 100000000)
    },
    {
        image: flowers,
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.8240955673406007 * 100000000)
    },
    {
        image: flowers,
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.09562669685999192 * 100000000)
    },
    {
        image: flowers,
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.6714128464836873 * 100000000)
    },
    {
        image: flowers,
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.4390360322151954 * 100000000)
    },
    {
        image: flowers,
        text: 'корзина фиолетовых роз',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.8314979394159296 * 100000000)
    },
]

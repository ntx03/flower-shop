import tort from '../img/tort.svg';

interface productCardShema {
    image: string,
    text: string,
    price: number,
    priseOld: string,
    id: number
}

export const productCardTort: productCardShema[] = [
    {
        image: tort,
        text: 'Торт иогуртовый с кусочками фруктов',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.016903999124513236 * 100000000)
    },
    {
        image: tort,
        text: 'Торт иогуртовый с кусочками фруктов',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.14293415241911234 * 100000000)
    },
    {
        image: tort,
        text: 'Торт иогуртовый с кусочками фруктов',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.8464488686958846 * 100000000)
    },
    {
        image: tort,
        text: 'Торт иогуртовый с кусочками фруктов',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.03622525520194286 * 100000000)
    },
    {
        image: tort,
        text: 'Торт иогуртовый с кусочками фруктов',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.8297591124104511 * 100000000)
    },
    {
        image: tort,
        text: 'Торт иогуртовый с кусочками фруктов',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.25921836718480806 * 100000000)
    },
]

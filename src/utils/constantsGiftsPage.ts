import gifts from '../img/gifts.svg';

interface productCardShema {
    image: string,
    text: string,
    price: number,
    priseOld: string,
    id: number
}

export const productCardGifts: productCardShema[] = [
    {
        image: gifts,
        text: 'Плюшевый мишка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.9541121322737847 * 100000000)
    },
    {
        image: gifts,
        text: 'Плюшевый мишка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.37531422527932845 * 100000000)
    },
    {
        image: gifts,
        text: 'Плюшевый мишка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.7461889581633518 * 100000000)
    },
    {
        image: gifts,
        text: 'Плюшевый мишка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.4080621409253318 * 100000000)
    },
    {
        image: gifts,
        text: 'Плюшевый мишка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(
            0.9822800458148795 * 100000000)
    },
    {
        image: gifts,
        text: 'Плюшевый мишка',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.7349985559740184 * 100000000)
    },
]

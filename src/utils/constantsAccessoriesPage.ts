import accessories from '../img/accessories.svg';

interface productCardShema {
    image: string,
    text: string,
    price: number,
    priseOld: string,
    id: number
}

export const productCardAccessories: productCardShema[] = [
    {
        image: accessories,
        text: 'Часы',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.7930863160948731 * 100000)
    },
    {
        image: accessories,
        text: 'Часы',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.8915154112569195 * 100000)
    },
    {
        image: accessories,
        text: 'Часы',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.1907628321776127 * 100000)
    },
    {
        image: accessories,
        text: 'Часы',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.7962593360609715 * 100000)
    },
    {
        image: accessories,
        text: 'Часы',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.5899639132932231 * 100000)
    },
    {
        image: accessories,
        text: 'Часы',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.5742627070663364 * 100000)
    },
]

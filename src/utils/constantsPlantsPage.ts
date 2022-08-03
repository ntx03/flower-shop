import Plants from '../img/plants.svg';

interface productCardShema {
    image: string,
    text: string,
    price: number,
    priseOld: string,
    id: number
}

export const productCardPlants: productCardShema[] = [
    {
        image: Plants,
        text: 'Комнатные растения',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.6987809658650614 * 100000000)
    },
    {
        image: Plants,
        text: 'Комнатные растения',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.69346557146468 * 100000000)
    },
    {
        image: Plants,
        text: 'Комнатные растения',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.771310293380205 * 100000000)
    },
    {
        image: Plants,
        text: 'Комнатные растения',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.25829663865170227 * 100000000)
    },
    {
        image: Plants,
        text: 'Комнатные растения',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.24782075945411552 * 100000000)
    },
    {
        image: Plants,
        text: 'Комнатные растения',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.02787071380029893 * 100000000)
    },
]

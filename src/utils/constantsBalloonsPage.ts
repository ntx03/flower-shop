import Balloons from '../img/air_ball.svg';

interface productCardShema {
    image: string,
    text: string,
    price: number,
    priseOld: string,
    id: number
}

export const productCardBalloons: productCardShema[] = [
    {
        image: Balloons,
        text: 'Набор воздушных шаров',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.005901350698324537 * 100000000)
    },
    {
        image: Balloons,
        text: 'Набор воздушных шаров',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.34345875991617336 * 100000000)
    },
    {
        image: Balloons,
        text: 'Набор воздушных шаров',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.5266224365552306 * 100000000)
    },
    {
        image: Balloons,
        text: 'Набор воздушных шаров',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.22141701129886115 * 100000000)
    },
    {
        image: Balloons,
        text: 'Набор воздушных шаров',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.7752806907186498 * 100000000)
    },
    {
        image: Balloons,
        text: 'Набор воздушных шаров',
        price: 1500,
        priseOld: '2500 ₽',
        id: Math.round(0.4276282164310621 * 100000000)
    },
]

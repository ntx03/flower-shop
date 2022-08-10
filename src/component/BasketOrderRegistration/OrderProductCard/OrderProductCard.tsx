import './OrderProductCard.scss';

function OrderProductCard({ image, text, price, counter }) {
    return (
        <div className='card__order'>
            <img className='card__order-image' src={image} alt={text} />
            <div className='card__order-text-container'>
                <p className='card__order-title'>{text}</p>
                <p className='card__order-price'>{price} ₽  ({counter} шт)</p>
            </div>
        </div>
    );
}

export default OrderProductCard;
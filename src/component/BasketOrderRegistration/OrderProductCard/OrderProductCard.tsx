import './OrderProductCard.scss';

function OrderProductCard({ image, title, price }) {
    return (
        <div className='card__order'>
            <img className='card__order-image' src={image} alt={title} />
            <div className='card__order-text-container'>
                <p className='card__order-title'>{title}</p>
                <p className='card__order-price'>{price}</p>
            </div>
        </div>
    );
}

export default OrderProductCard;
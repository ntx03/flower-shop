import './WhyUsCard.scss';

function WhyUsCard({ image, text }) {
    return (
        <div className="card-product-why-container">
            <img className="card-product-why-image" src={image} alt="иконка в виде солнца" />
            <p className="card-product-why-text">{text}</p>
        </div>
    );
}

export default WhyUsCard;
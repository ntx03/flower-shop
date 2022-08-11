function ReviewsCard({ title, text }) {
    return (
        <div className="card-product__reviews-container">
            <h3 className="card-product__reviews-title">{title}</h3>
            <p className="card-product__reviews-text">{text}</p>
        </div>
    );
}

export default ReviewsCard;
import React from "react";
import '../Main.scss';
import { Link } from 'react-router-dom';


function CardMainProducts(props) {
    return (
        <Link to={props.link} className="main__card" onClick={() => window.scrollTo(0, 0)}>
            <img className='main__card-image' src={props.image} alt={props.name} />
            <div className='main__card-link'><p className="main__card-link-text">{props.name}</p></div>
        </Link>
    )
}

export default CardMainProducts;
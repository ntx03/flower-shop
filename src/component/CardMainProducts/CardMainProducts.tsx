import React from "react";
import '../Main/Main.scss';
import { Link } from 'react-router-dom';


function CardMainProducts(props) {
    return (
        <div className="main__card">
            <img className='main__card-image' src={props.image} alt={props.name} />
            <Link to={props.link} className='main__card-link'><p className="main__card-link-text">{props.name}</p></Link>
        </div>
    )
}

export default CardMainProducts;
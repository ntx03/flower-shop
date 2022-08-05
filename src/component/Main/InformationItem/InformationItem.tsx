import React from "react";
import './InformationItem.scss';

function InformationItem(props) {
    return (
        <div className="main__information-item">
            <img className="main__information-item-image" alt={`иконка для карточки ${props.title}`} src={props.image} />
            <div className="main__information-item-text-container">
                <h3 className="main__information-item-title">{props.title}</h3>
                <p className="main__information-item-text">{props.text}</p>
            </div>
        </div>
    );
}

export default InformationItem;
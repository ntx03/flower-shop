import '../Basket.scss';

function BasketCheckBox({ image, text, textSpan, qestionInformation, checked, SetChecked }) {

    return (
        <div className='basket__check-box-item' >
            <img className='basket__check-box-item-image' src={image} alt="иконка карточки" />
            <input type='checkbox' className='basket__check-box-item-checkbox' checked={checked} onChange={() => { SetChecked(!checked) }} />
            <p className='basket__check-box-item-text' >{text} <span className='basket__check-box-item-text-span' > {textSpan} </span></p >
            <p className='basket__check-box-item-information' title={qestionInformation} >? </p>
        </div>
    );
}

export default BasketCheckBox;
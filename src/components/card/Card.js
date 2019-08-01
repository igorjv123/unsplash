import React from 'react';
import './style.sass'

const Card = (props) => {
    const { alt_description, urls } = props.image
    return(
        <div className='card'>
            <img className='card__image' src={urls.regular} alt=""/>
            <p className='card__description'>{alt_description}</p>
        </div>
    )
}
export default Card;
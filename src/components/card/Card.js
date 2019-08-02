import React from 'react';
import './style.sass';
import { string, object } from 'prop-types';
import sampleImg from '../../assets/sample.png';
import HOC from "../../logic/HOC";
const Card = (props) => {

    const { alt_description, urls } = props.image;
    return(
        <div className='card'>
            <img className='card__image' src={urls.regular} alt=""/>
            <p className='card__description'>{alt_description}</p>
        </div>
    )
};

Card.propTypes = {
    alt_description: string,
    urls: object
};

Card.defaultProps = {
    alt_description: 'description',
    urls: {
        regular: sampleImg
    }
};
export default  HOC(Card);
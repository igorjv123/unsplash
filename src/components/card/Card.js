import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.sass';
import { string, object } from 'prop-types';
import sampleImg from '../../assets/sample.png';
import HOC from "../../logic/HOC";
const Card = (props) => {
    const { alt_description, urls, id } = props.image;
    const { onClick, name } = props;

    const handleClick = () => {
        const { image, onClick}  = props;
        onClick(image);
    }


    return(
        <div className='card' id = {id} onClick={ handleClick }>
                <LazyLoadImage
                    className='card__image'
                    alt={alt_description}
                    effect="blur"
                    src={urls.regular}
                    width='400px'
                    height='400px'
                    style={{objectFit: 'cover', objectPosition:'center'}}
                />

            <div className='card-info'>
                <p className='card-info__description'>{alt_description}</p>
                {/*<button className='card-info__open-btn' >Open</button>*/}
            </div>
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
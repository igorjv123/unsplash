import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.sass';
import sampleImg from '../../assets/sample.png';
import HOC from "../../logic/HOC";
import PropTypes from "prop-types";

export const Card = (props) => {

    const { alt_description, urls, id, description } = props.image;
    const { onClick, name } = props;

    const handleClick = () => {
        const { image, onClick}  = props;
        //
        onClick(id);
    };


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
                <p className='card-info__description'>{description || alt_description}</p>
                {/*<button className='card-info__open-btn' >Open</button>*/}
            </div>
        </div>
    )
};

Card.propTypes = {
    image: PropTypes.shape({
        urls: PropTypes.shape({
            regular: PropTypes.string
        }),
        alt_description: PropTypes.string
    }).isRequired,
    onClick: PropTypes.func.isRequired

};

Card.defaultProps = {
    alt_description: 'description',
    urls: {
        regular: sampleImg
    }
};
export default  HOC(Card);
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.sass';
import PropTypes from "prop-types";

export const Card = (props) => {

    const { alt_description, urls, description, id } = props.image;
    const { onClick } = props;

    const handleClick = () => {
        onClick(id);
    };

    return(
        <div tabIndex={0} className='card' onClick={ handleClick }>
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
    image: {
        alt_description: 'description',
        id: 'id',
        urls:{
            regular: 'http:/link.jpg',
        }
    },
    onClick: () => {}
};
export default  Card;
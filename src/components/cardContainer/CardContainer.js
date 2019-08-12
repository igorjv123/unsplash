import React, { useState, useEffect, useRef  } from 'react';
import './style.sass';
import { connect } from "react-redux";
import loading from '../../assets/giphy.gif';
import { string, func, object } from 'prop-types';
import Card from '../card/Card';
import { withRouter } from "react-router";
import { getImagesAsync, loadImagesAsync,setImage } from '../../logic/cardContainer/actions'
import {Link} from "react-router-dom";


const CardContainer = ({images, setActiveImage, history, getImages, loadImages, query}) => {
    const [ isLoading, setIsLoading] = useState(false);
    const [ page, setPage ] = useState(1);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll, true)
        }
    }, [page])

    useEffect(() => {
        setIsLoading(true);
        getImages(query);
    }, [query])


    useEffect(() => {
        if (images.total_pages >= page) {
            loadImages({
                query,
                page
            })
        }
    }, [page])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
            setPage(page+1);
        }
    };

    const handleItemClick = (id) => {
        history.push('/image/' + id)

    }

    const shouldBeLoading = isLoading && images.results.length < images.total;

    return (
        <div className='card-container'>
            {
                images.results.map((item) =>
                    <Card onClick={handleItemClick} image={ item } key={'main' + item.id}/>
                )
            }

            {
                shouldBeLoading &&
                <img className='card-container__loading-img' src={ loading } alt='loading' />
            }

        </div>
    )

}

CardContainer.propTypes = {
    query: string,
    getImages: func,
    loadImages: func,
    images: object || string
}

CardContainer.defaultProps = {
    query: '',
    getImages: () => {},
    loadImages: () => {},
    images: {
        results: []
    }
}

const mapStateToProps = state => {
    const { images, query } = state;
    return { images, query };
}

const mapDispatchToProps = {
        getImages: getImagesAsync,
        loadImages: loadImagesAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardContainer));

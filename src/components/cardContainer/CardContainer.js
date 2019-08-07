import React, { useState, useEffect, useRef  } from 'react';
import './style.sass';
import { connect } from "react-redux";
import loading from '../../assets/giphy.gif';
import { string, func, object } from 'prop-types';
import Card from '../card/Card';
import { withRouter } from "react-router";
import { getImagesAsync, loadImagesAsync,setImage } from '../../logic/cardContainer/actions'


const CardContainer = (props) => {
    const [ isLoading, setIsLoading] = useState(false);
    const [ page, setPage ] = useState(1);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        return () => {
            window.removeEventListener('scroll', handleScroll, true)
        }
    }, [page])

    useEffect(() => {
        const { query = 'popular' } = props.query && props
        setIsLoading(true)
        props.getImages(query);
    }, [props.query])

    useEffect(() => {
        const { images } = props;
        const { query = 'popular' } = props && props.query
        if (images.total_pages >= page) {
            props.loadImages({
                query: query,
                page: page
            })
        }
    }, [page])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight){
            setPage(page+1);
        }
    }

    const handleItemClick = (image) => {
        props.setActiveImage(image);
        props.history.push('/image')

    }

    const { images } = props;
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
        setActiveImage: setImage
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardContainer));

import React from 'react';
import { connect } from 'react-redux';
import './style.sass';
import { Link, withRouter } from 'react-router-dom';
import setQuery from '../../logic/mainSearch/actions'
import {func, object} from "prop-types";

const ImageItem = (props) => {

    const handleTagClick = function(e) {
        props.searchByTag(e.target.id)
        props.history.push('/')
    }
    const goBack = () => {
        props.history.goBack()
    }
    const { alt_description, user, urls, created_at, likes, tags, links, description } = props.activeImage;

    return(
        <div className='image-item'>
            <img className = 'image-item__image' src={urls.regular} alt={description || alt_description}/>

            <div className='image-item__info'>
                <p className='image-description'>{alt_description}</p>
                <p className='image-author'>author: {user.name}, likes: {likes}</p>
                <div className={'image-tags'}>
                    {tags.map(({ title }) =>
                        <button
                            className='image-tags__item'
                            onClick={handleTagClick}
                            key={`tags-list-${title}`}
                            id={title}
                            tabIndex={0}
                        >
                            {title}
                        </button>
                    )}
                </div>
                <div className='image-item__buttons'>
                    <a tabIndex={0} target='_blank' download="image.jpg" href={links.download} className='image-button'>Download</a>
                    <button tabIndex={0} className='image-button' onClick={goBack}>Back</button>
                </div>

            </div>

        </div>
    )

}

ImageItem.propTypes = {
    activeImage: object,
    searchByTag: func
}

ImageItem.defaultProps = {
    activeImage: {
        alt_description: 'description',
        user: {
            name: 'John Doe'
        },
        urls: {},
        created_at: '01.01.01',
        likes: 1,
        tags: [],
        links: {}

    },
    searchByTag: () => {}
}

const mapDispatchToProps = {
    searchByTag: setQuery
};

export default connect(null, mapDispatchToProps)(withRouter(ImageItem));


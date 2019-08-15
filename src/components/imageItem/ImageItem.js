import React from 'react';
import { connect } from 'react-redux';
import './style.sass';
import { withRouter } from 'react-router-dom';
import setQuery from '../../logic/mainSearch/actions'
import {oneOfType, func, string, shape, number, arrayOf} from "prop-types";

export const ImageItem = (props) => {

    const handleTagClick = function(e) {
        props.searchByTag(e.target.id)
        props.history.push('/')
    }
    const goBack = () => {
        props.history.goBack()
    }
    const { alt_description, user, urls, likes, tags, links, description } = props.activeImage;

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
                    <button tabIndex={0} className='image-button back-button' onClick={goBack}>Back</button>
                </div>

            </div>

        </div>
    )

}

ImageItem.propTypes = {
    activeImage: shape({
        alt_description: string.isRequired,
        user: shape({
            name: string.isRequired
        }),
        urls: shape({
            regular: string.isRequired
        }),
        likes: oneOfType([
            string,
            number
        ]).isRequired,

        tags: arrayOf(shape({
            title: string.isRequired
        })),

        links: shape({
            download: string.isRequired
        }),
        description: string.isRequired
    }).isRequired,

    searchByTag: func.isRequired,

    history: shape({
        push: func.isRequired,
        goBack: func.isRequired
    }).isRequired
}

ImageItem.defaultProps = {
    activeImage: {
        alt_description: 'alt_description',
        description: 'description',
        user: {
            name: 'John Doe'
        },
        urls: {
            regular: 'link.regular'
        },
        likes: 1,
        tags: [{
            title: 'tagName'
        }],
        links: {
            download: 'link.download'
        },
        history: {
            push: () => {}
        }

    },
    searchByTag: () => {}
}

const mapDispatchToProps = {
    searchByTag: setQuery
};

export default connect(null, mapDispatchToProps)(withRouter(ImageItem));


import React from 'react';
import './style.sass';
import {shape, func, string, array, arrayOf} from 'prop-types';

export const CategoryItem = (props) => {

    const { id, title, description, preview_photos } = props.item;
    const handleClick = () => {
        props.onClick(id)
    }
    return(
      <div className={'category-item'} onClick={ handleClick }>
          <img className={'category-item__image'} src={preview_photos[0].urls.small} alt={description}/>
          <h2 className={'category-item__title'}>
              <span>{title}</span>
          </h2>
      </div>
    );
}

CategoryItem.propTypes = {
    item: shape({
        id: string.isRequired,
        title: string.isRequired,
        description: string.isRequired,
        preview_photos: arrayOf(shape({
            urls: shape({
                small: string.isRequired
            })
        })
        )
    }).isRequired,
    onClick: func.isRequired
}

CategoryItem.defaultProps = {
    item: {
        id: 'id',
        title: 'title',
        description: 'desc',
        preview_photos: [{urls: {
            small: 'www.default-link.com'
        }
        }]
    },
    onClick: () => {}
}

export default CategoryItem;
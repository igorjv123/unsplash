import React from 'react';
import './style.sass';

const CategoryItem = (props) => {

    const { id, links, title, description, preview_photos } = props.item;
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

export default CategoryItem;
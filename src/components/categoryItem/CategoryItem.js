import React from 'react';
import './style.sass';

const CategoryItem = (props) => {

    const { links, title, description, preview_photos } = props.item;
    return(
      <div className={'category-item'}>
          <img className={'category-item__image'} src={preview_photos[0].urls.small} alt={description}/>
          <h2 className={'category-item__title'}>
              <p>{title}</p>
          </h2>
      </div>
    );
}

export default CategoryItem;
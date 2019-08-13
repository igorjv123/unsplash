import React, { useState, useEffect } from 'react';
import './style.sass';
import CategoryItem from '../../components/categoryItem/CategoryItem';
import collectionsService  from '../../services/collectionsService'


const CategoriesPage = ({}) => {
    const [categories, setCategories] = useState(false);

    useEffect(() => {
        collectionsService.getPopularCollections()
            .then(res => {
                setCategories(res)
            })
    }, [])
    // const { CategoriesPage } = props;
    return(
        <div className='categories-page'>
            {categories && categories.map((item) => <CategoryItem key={ item.id } item={ item }/>)}
        </div>
    )
}

export default CategoriesPage;
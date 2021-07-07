import React, { useState, useEffect } from 'react';
import './style.sass';
import CategoryItem from '../../components/categoryItem/CategoryItem';
import collectionsService  from '../../services/collectionsService'
import {withRouter} from "react-router";


const CategoriesPage = (props) => {
    const [categories, setCategories] = useState(false);

    useEffect(() => {
        collectionsService.getPopularCollections()
            .then(res => {
                setCategories(res)
            })
    }, [])
    const handleCategoryClick = (id) => {
        props.history.push(`/category/${id}`)
    }
    // const { CategoriesPage } = props;
    return(
        <div className='categories-page'>
            {categories && categories.map((item) => <CategoryItem key={ item.id } onClick = {handleCategoryClick} item={ item }/>)}
        </div>
    )
}

export default withRouter(CategoriesPage);
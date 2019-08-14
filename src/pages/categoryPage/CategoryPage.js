import React, { useState, useEffect } from 'react';
import './style.sass';
import CategoryItem from '../../components/categoryItem/CategoryItem';
import { connect } from "react-redux";
import Card from "../../components/card/Card";
import { withRouter } from "react-router";
import {getCategoryPhotosAsync, loadMoreCategoryPhotosAsync} from "../../logic/categoryPage/actions";


const CategoryPage = (props) => {
    const [ page, setPage ] = useState(1);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll, true)
        }
    }, [page])

    useEffect(() => {
        props.getPhotos(props.match.params.id);
    },[])


    useEffect(() => {
        if(page !== 1){
            props.loadMorePhotos({
                id: props.match.params.id,
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
        props.history.push('/image/' + id)

    }
    // const { CategoriesPage } = props;
    return(
        <div className='card-container'>
            {
                props.collectionImages.length !== 0 && props.collectionImages.map((item) =>
                    <Card onClick={handleItemClick} image={ item } key={'main' + item.id}/>
                )
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    const { collectionImages } = state;
    return { collectionImages }
}
const mapDispatchToProps =  {
    getPhotos: getCategoryPhotosAsync,
    loadMorePhotos: loadMoreCategoryPhotosAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryPage));
import React from 'react';
import { connect } from 'react-redux';
import './style.sass';
import { Link } from 'react-router-dom';


const ImageItem = (props) => {

    const { alt_description, user, urls, created_at, likes } = props.activeImage;
    console.log(props)
    return(
        
        <div className='image-item'>
            <img className = 'image-item__image' src={urls.regular} alt={alt_description}/> 
            <div className='image-item__info'>
                <p className='image-description'>{alt_description}</p>
                <p className='image-author'>author: {user.name}, likes: {likes}</p>
            </div>

            <Link to='/'>back</Link>
        </div>
    )

}

const mapStateToProps = (state) => {
    const { activeImage } = state;
    return { activeImage }
}
export default connect(mapStateToProps, null)(ImageItem);


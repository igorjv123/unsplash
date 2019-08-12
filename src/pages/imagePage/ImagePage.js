import React, {useEffect} from 'react';
import ImageItem from '../../components/imageItem/ImageItem';
import './style.sass';
import { withRouter } from "react-router";
import { getImageByIdAsync, setActiveImage } from "../../logic/imagePage/actions";
import {connect} from "react-redux";

const ImagePage = ({activeImage, getImage, match, setActive}) => {
    useEffect(() => {
        setActive()
        getImage(match.params.id)
    },[])
    console.log(activeImage)

    return(
        <div className={'image-page'}>
            {activeImage.id && <ImageItem activeImage={activeImage}/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    const {activeImage} = state;
    return { activeImage }
}

const mapDispatchToProps = {
    getImage: getImageByIdAsync,
    setActive: setActiveImage
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImagePage));
import { getImagesAsync, loadImagesAsync } from '../../logic/cardContainer/actions'
export const mapStateToProps = state => {
    const { images, query } = state;
    return { images, query };
}

export const mapDispatchToProps = (dispatch) => {
    return{
        getImages(data){
            dispatch(getImagesAsync(data));
        },
        loadImages(data){
            dispatch(loadImagesAsync(data))
        }
    }
}



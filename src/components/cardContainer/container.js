import { getImages, loadImages } from '../../logic/cardContainer/actions'
export const mapStateToProps = state => {
    const { images, query } = state;
    return { images, query };
}

export const mapDispatchToProps = (dispatch) => {
    return{
        getData(data){
            dispatch(getImages(data));
        },
        loadData(data){
            dispatch(loadImages(data))
        }
    }
}



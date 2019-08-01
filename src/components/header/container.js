import getImages from '../../logic/header/actions'
export const mapStateToProps = state => {
    const { images } = state;
    return { images }
}

export const mapDispatchToProps = (dispatch) => {
    return{
        getData(query){
            dispatch(getImages(query))
        }
    }
}



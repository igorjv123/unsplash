import setQuery from '../../logic/header/actions'

export const mapDispatchToProps = (dispatch) => {
    return{
        setQuery(query){
            dispatch(setQuery(query))
        }
    }
}



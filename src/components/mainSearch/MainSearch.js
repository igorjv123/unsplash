import React, { useState } from 'react'
import TextInput from '../textInput/TextInput'
import './style.sass'
import { connect } from 'react-redux';
import MainInputButton from '../mainInputButton/MainInputButton'
import { func, shape } from 'prop-types'
import setQuery from '../../logic/mainSearch/actions'
import { withRouter } from "react-router";


export const MainSearch = (props) => {

    const [query, setQuery] = useState('')


    const handleInputChange = ({ target }) => {
        setQuery(target.value);
    }

    const handleBtnClick = () => {
        props.setNewQuery(query)
    }

    const handleCategoriesClick = () => {
        props.history.push('/categories')
    }

    return(
        <div className = 'header' >
            <TextInput
                className='header__input'
                placeholder={'Type smth...'}
                value = {query}
                onClick={handleInputChange}
            />
            <MainInputButton
                className={'header__search-button btn-search'}
                onClick={handleBtnClick}
            >
                Search
            </MainInputButton>
            <MainInputButton
                className={'header__search-button'}
                onClick={handleCategoriesClick}
            >
                Categories
            </MainInputButton>
        </div>
    )
}

MainSearch.propTypes = {
    setNewQuery: func.isRequired,
    history: shape({
        push: func.isRequired
    })
}

MainSearch.defaultProps = {
    setNewQuery: () => {}
}

const mapStateToProps = (state) => {
    const { query } = state;
    return { query }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setNewQuery(query){
            dispatch(setQuery(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainSearch));

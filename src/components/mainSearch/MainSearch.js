import React, { Component, useState } from 'react'
import TextInput from '../textInput/TextInput'
import './style.sass'
import { connect } from 'react-redux';
import MainInputButton from '../mainInputButton/MainInputButton'
import { func } from 'prop-types'
import setQuery from '../../logic/mainSearch/actions'


const MainSearch = (props) => {

    const [query, setQuery] = useState(props.query)


    const handleInputChange = ({ target }) => {
        setQuery(target.value);
    }

    const handleBtnClick = () => {
        props.setNewQuery(query)
    }

    return(
        <div className = 'header' >
            <TextInput
                className='header__input'
                placeholder={'Type smth...'}
                value = {query}
                onChange={handleInputChange}
            />
            <MainInputButton
                className={'header__search-button'}
                onClick={handleBtnClick}
            >
                Search
            </MainInputButton>
        </div>
    )
}

MainSearch.propTypes = {
    setNewQuery: func
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


export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);

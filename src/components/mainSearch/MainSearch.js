import React, { Component } from 'react'
import TextInput from '../textInput/TextInput'
import './style.sass'
import { connect } from 'react-redux';
import MainInputButton from '../mainInputButton/MainInputButton'
import { func } from 'prop-types'
import setQuery from '../../logic/mainSearch/actions'


class MainSearch extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
    }
    static propTypes = {
        setQuery: func
    }

    static defaultProps = {
        setQuery: () => {}
    }

    handleInputChange = ({ target }) => {
        this.setState({ query: target.value });
    }

    handleBtnClick = () => {
        const { query } = this.state;
        this.props.setQuery(query)
    }

    render() {
        const { query } = this.state;
        return(
            <div className = 'header' >
                <TextInput className='header__input' placeholder={'Type smth...'} value = {query} onChange={this.handleInputChange}/>
                <MainInputButton className={'header__search-button'} onClick={this.handleBtnClick}> Search </MainInputButton>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setQuery(query){
            dispatch(setQuery(query))
        }
    }
}

export default connect(null, mapDispatchToProps)(MainSearch);

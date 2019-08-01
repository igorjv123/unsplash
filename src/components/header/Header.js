import React, { Component } from 'react'
import TextInput from '../textInput/TextInput'
import './style.sass'
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps} from "./container";

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({query: e.target.value});
    }

    handleBtnClick = () => {
        this.props.getData(this.state.query)
    }

    render(){
        const { query } = this.state;
        const { images } = this.props;
        console.log(images)
        return(
            <div className = 'header' >
                <TextInput className='header__input' placeholder={'Type smth...'} value = {query} onChange={this.handleInputChange}/>
                <button className='' onClick={this.handleBtnClick}>OK</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

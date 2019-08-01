import React, { Component } from 'react';
import './style.sass'
import Card from '../card/Card'
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../header/container";
import loading from './giphy.gif'

class CardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading : false
        }
    }
    render() {
        const { images } = this.props;
        return(
            <div className='card-container'>
                {images.results ?
                    images.results.map((item) =>
                        <Card image={ item } key={'main' + item.id}/>
                    )
                    :
                    null
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

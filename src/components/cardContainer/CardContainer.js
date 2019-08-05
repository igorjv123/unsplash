import React, { Component } from 'react';
import './style.sass'
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./container";
import loading from '../../assets/giphy.gif'
import { string, func, object } from 'prop-types'
import Card from '../card/Card'



class CardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : false,
            page: 1,
            usersArr:[]
        }
    }

    static propTypes = {
        query: string,
        getData: func,
        loadData: func,
        images: object || string
    }
    static defaultProps = {
        query: '',
        getData: () => {},
        loadData: () => {},
        images: {}
    }
    componentDidMount() {
        const { query } = this.props
        if(query.length > 0) {
            this.setState({isLoading: true})
            this.props.getData(query);
        }
    }
    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query) {
            this.props.getData(this.props.query);
            this.setState({ isLoading: true })
        }
        if (prevProps.images !== this.props.images) {
            this.setState({ isLoading: false })
        }
    }

    handleScroll = () => {
        const { page } = this.state;
        const { query, images } = this.props;
        if (window.innerHeight + document.documentElement.scrollTop + 1 < document.documentElement.offsetHeight){
            return;
        }
        this.setState({ page: page + 1, isLoading: true}, () => {
                if (images.total_pages >= page) {
                    this.props.loadData({query: query, page: this.state.page})
                }
            }
        )
    }

    render() {
        const { images } = this.props;
        const { isLoading } = this.state;
        return(
            <div className='card-container'>
                {images.results && images.results.map((item) =>
                        <Card image={ item } key={'main' + item.id}/>
                    )
                }

                { isLoading && images.results && images.results.length < images.total &&
                    <img className='card-container__loading-img' src={ loading } alt='loading' />
                }



            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

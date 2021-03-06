import React, { Component } from 'react';
import './style.sass'
import { connect } from "react-redux";
import loading from '../../assets/giphy.gif'
import { string, func, object } from 'prop-types'
import Card from '../card/Card'
import { getImagesAsync, loadImagesAsync } from '../../logic/cardContainer/actions'


class CardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : false,
            page: 1,
        }
    }

    static propTypes = {
        query: string,
        getImages: func,
        loadImages: func,
        images: object || string
    }
    static defaultProps = {
        query: '',
        getImages: () => {},
        loadImages: () => {},
        images: {}
    }
    componentDidMount() {
        const { query } = this.props
        if(query.length > 0) {
            this.setState({isLoading: true})
            this.props.getImages(query);
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
            this.props.getImages(this.props.query);
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
                    this.props.loadImages({query: query, page: this.state.page})
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

                {isLoading && images.results && images.results.length < images.total &&
                    <img className='card-container__loading-img' src={ loading } alt='loading' />
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    const { images, query } = state;
    return { images, query };
}

const mapDispatchToProps = (dispatch) => {
    return{
        getImages(data){
            dispatch(getImagesAsync(data));
        },
        loadImages(data){
            dispatch(loadImagesAsync(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

import React, { Component } from 'react';
import './style.sass';
import { connect } from "react-redux";
import loading from '../../assets/giphy.gif';
import { string, func, object } from 'prop-types';
import Card from '../card/Card';
import { withRouter } from "react-router";
import { getImagesAsync, loadImagesAsync,setImage } from '../../logic/cardContainer/actions'


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
        images: {
            results: []
        }
    }
    componentDidMount() {
        const { query = 'popular' } = this.props.query && this.props
        this.setState({isLoading: true})
        this.props.getImages(query);

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
        const { images } = this.props;
        const { query = 'popular' } = this.props.query && this.props
        if (window.innerHeight + document.documentElement.scrollTop + 1 < document.documentElement.offsetHeight){
            return;
        }
        this.setState({ page: page + 1, isLoading: true}, () => {
            if (images.total_pages >= page) {
                this.props.loadImages({
                    query: query,
                    page: this.state.page
                })
            }
        })
    }

    handleItemClick = (image) => {
        this.props.setActiveImage(image);
        this.props.history.push('/image')
    }

    render() {
        const { images } = this.props;
        const { isLoading } = this.state;
        const shouldBeLoading = isLoading && images.results.length < images.total;

        return (
            <div className='card-container'>
                {
                    images.results.map((item) =>
                        <Card onClick={this.handleItemClick} image={ item } key={'main' + item.id}/>
                    )
                }

                {
                    shouldBeLoading &&
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

const mapDispatchToProps = {
        getImages: getImagesAsync,
        loadImages: loadImagesAsync,
        setActiveImage: setImage
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardContainer));

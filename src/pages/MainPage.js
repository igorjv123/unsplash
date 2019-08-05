import React from 'react';
import MainSearch from '../components/mainSearch/MainSearch'
import CardContainer from "../components/cardContainer/CardContainer";

const MainPage = () => {
    return(
        <div className={'main-page'}>
            <MainSearch />
            <CardContainer />
        </div>
    )
}

export default MainPage;
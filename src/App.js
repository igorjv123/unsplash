import React from 'react';
import './App.css';
import Header from './components/header/Header'
import CardContainer from './components/cardContainer/CardContainer';
import { Layout } from "./logic/hoc/Layout";

function App() {
    return (
            <Layout>
                <CardContainer/>
            </Layout>
    );
}

export default App;

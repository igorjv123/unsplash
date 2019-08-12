import React from 'react';
import './App.css';
import ImagePage from './pages/imagePage/ImagePage';
import MainPage from './pages/mainPage/MainPage';
import { BrowserRouter as Router, Route,  } from "react-router-dom";

function App() {
    return (
        <Router>
            <Route exact path="/" component={ MainPage } />
            <Route path="/image/:id" component={ ImagePage } />
        </Router>
    );
}

export default App;

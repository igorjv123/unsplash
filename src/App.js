import React from 'react';
import './App.css';
import ImagePage from './pages/ImagePage';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Route,  } from "react-router-dom";

function App() {
    return (
        <Router>
            <Route exact path="/" component={ MainPage } />
            <Route exact path="/image" component={ ImagePage } />
        </Router>
    );
}

export default App;

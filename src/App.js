import React from 'react';
import './App.css';
import ImagePage from './pages/imagePage/ImagePage';
import MainPage from './pages/mainPage/MainPage';
import CategoriesPage from './pages/categoriesPage/CategorisePage'
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import CategoryPage from "./pages/categoryPage/CategoryPage";

function App() {
    return (
        <Router>
            <Route exact path="/" component={ MainPage } />
            <Route path="/image/:id" component={ ImagePage } />
            <Route path="/categories" component={ CategoriesPage } />
            <Route path="/category/:id" component={ CategoryPage } />
        </Router>
    );
}
// maxkuzya
export default App;

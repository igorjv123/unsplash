import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import CardContainer from './components/cardContainer/CardContainer'
function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;

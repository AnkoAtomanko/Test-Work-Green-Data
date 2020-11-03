import logo from './logo.svg';
import './App.css';
import './components/grid.js';
import Grid from "./components/grid";
import React from "react";



function App(props) {
  return (
    <div className="App">
    Кукуха едет. Ставим ставки. Напишу ли страницу за 2 дня?
      <Grid state={props.state} />
    </div>

  );
}

export default App;

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CardPokemon from './components/CardPokemon/CardPokemon.js';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="row">
          <div className="col-12 col-lg-3 col-sm-6" style={{ paddingTop: '10px' }}>
            <CardPokemon/>
          </div>
        </div>      
      </div>      
    </div>
  );
}

export default App;

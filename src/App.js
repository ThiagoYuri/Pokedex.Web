import React from 'react';
//import logo from './logo.svg';
import './App.css';
import LoadPokemons from './components/LoadPokemons/LoadPokemons';
import { useState, useEffect } from 'react';

function App() {
  const [listPokemons, setPokemons] = useState([]);
 
  //Send request get Pokemons list
  useEffect(() => {  
     fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",{method:"GET"})
     .then(data => {
         return data.json();
     }).then((a)=>{
         var result = a
         setPokemons(result)
     })     
  }, [])
  //console.log(listPokemons)
 
  return (
    <div className="App">
      <div className='container'>
            {listPokemons.results?.length > 0 &&
            <LoadPokemons ListPokemons={listPokemons.results}></LoadPokemons>            
            }
      </div>      
    </div>
  );
}

export default App;

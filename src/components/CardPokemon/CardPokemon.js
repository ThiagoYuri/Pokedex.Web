import React from 'react';
//import PropTypes from 'prop-types';
import styles from './CardPokemon.module.scss';
import gifLoading from '../../resources/loading.gif'
import Image from '../Image/Image.js'
import { useState, useEffect } from 'react';


export default function CardPokemon (props) {  
  
  const [pokemonInfo, setPokemonInfo] = useState([]);
  //Send request get Pokemons list
  useEffect(() => {  
     fetch(props.CardInfo.url,{method:"GET"})
     .then(data => {
         return data.json();
     }).then((a)=>{
         var result = a
         setPokemonInfo(result)
     })     
  }, [props])


  return pokemonInfo.sprites?.front_default !== null ? (
  <div>
    <div className="card border" id={styles.CardPokemon}>
      <div id={styles.fundoCard}>
        <div id={styles.Image} className="card-img-top">
          <Image 
          ImageURL={(pokemonInfo.sprites?.front_default == null)? gifLoading : pokemonInfo.sprites?.front_default}
          onError={event => {
            event.target.src = {gifLoading}
            event.onerror = null
          }}></Image>
        </div>
        <div className="card-body">
          <p className="card-text text-black" style={{ textAlign: "center" }}>{pokemonInfo.name}</p>
        </div>
      </div>
      <div className="card-footer" id={styles.bgCard}>               
          <spawn class="btn btn-secondary disabled text-light" id={styles.typeInfoPokemon} aria-disabled="true" >typesesdsdsds</spawn>          
          <spawn class="btn btn-secondary disabled text-light" id={styles.typeInfoPokemon} aria-disabled="true" >typesdsd</spawn>          
      </div>
    </div>
  </div>) : null
}

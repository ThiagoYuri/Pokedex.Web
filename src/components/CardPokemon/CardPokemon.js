import React from 'react';
//import PropTypes from 'prop-types';
import styles from './CardPokemon.module.scss';
import gifLoading from '../../resources/loading.gif'
import Image from '../Image/Image.js'

const CardPokemon = () => (
  <div >
    <div className="card border" id={styles.CardPokemon}>
      <div id={styles.fundoCard}>
        <div id={styles.Image} className="card-img-top">
          <Image ImageURL={gifLoading}></Image>
        </div>
        <div className="card-body">
          <p className="card-text text-black" style={{ textAlign: "center" }}>Name Pokemon</p>
        </div>
      </div>
      <div className="card-footer" id={styles.bgCard}>               
          <spawn class="btn btn-secondary disabled text-light" id={styles.typeInfoPokemon} aria-disabled="true" >typesesdsdsds</spawn>          
          <spawn class="btn btn-secondary disabled text-light" id={styles.typeInfoPokemon} aria-disabled="true" >typesdsd</spawn>          
      </div>
    </div>
  </div>
);

CardPokemon.propTypes = {};

CardPokemon.defaultProps = {};

export default CardPokemon;

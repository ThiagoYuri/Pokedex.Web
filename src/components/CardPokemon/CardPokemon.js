import React from 'react';
//import PropTypes from 'prop-types';
import styles from './CardPokemon.module.scss';
import gifLoading from '../../resources/loading.gif'

const CardPokemon = () => (
  <div className={styles.CardPokemon}>
      <div className="card border border-primary rounded" id={styles.CardPokemon}>
        <img className="card-img-top bg-secondary" src={gifLoading} alt="Loading" id={styles.imageDirectory} ></img>
        <div className="card-body">
          <p className="card-text text-black" style={{textAlign: "center"}}>Name Pokemon</p>
        </div>
        <div className="card-footer">
        <p  class="btn btn-secondary btn-lg disabled" aria-disabled="true" >types</p>
        </div>
      </div>
  </div>
);

CardPokemon.propTypes = {};

CardPokemon.defaultProps = {};

export default CardPokemon;

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
            <p className="card-text text-black" style={{textAlign: "center"}}>Name Pokemon</p>
          </div>
        </div>       
        <div className="card-footer" id={styles.bgCard}>
        <p  class="btn btn-secondary btn-lg disabled" aria-disabled="true" >types</p>
        </div>
      </div>
  </div>
);

CardPokemon.propTypes = {};

CardPokemon.defaultProps = {};

export default CardPokemon;

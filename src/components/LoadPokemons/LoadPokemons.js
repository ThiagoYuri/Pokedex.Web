import React from 'react';
import CardPokemon from '../CardPokemon/CardPokemon';

export default function LoadPokemons (props) {
  var cardList = [];
  //create List
  props.ListPokemons.forEach((data) => {
      cardList.push(<div className="col-12 col-lg-3 col-sm-6" style={{ paddingTop: '10px' }}>
          <CardPokemon CardInfo={data} />
      </div>);
  });

  return <div className='row text-md-left'>{cardList}</div>
}


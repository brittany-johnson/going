import React from 'react';

import Place from './Place.js';
import CardNav from './CardNav.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  updateCards() {

  }
  render() {
    return(
      <>
        <Place />
        <CardNav />
      </>
    );
  }
}

export default Card;

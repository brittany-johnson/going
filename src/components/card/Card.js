import React from 'react';

import Place from './place/Place.js';
import Selection from './selection/Selection.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  updateCards() {
    console.log()
  }
  render() {
    return(
      <>
        <Selection />
        <Place />
      </>
    );
  }
}

export default Card;

import React from 'react';

import Place from './place/Place.js';
import Selection from './selection/Selection.js';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      placeQuery: '',
      locationQuery: '',
    }
  };

  updateCardData = (selectionChange) => {
    this.setState({
        placeQuery: selectionChange,
    })
  };

  updateLocation = (locationChange) => {
    this.setState({
      locationQuery: locationChange,
    })
  };

  render() {
    return(
      <>
        <Selection
        updateCardData={this.updateCardData} updateLocation={this.updateLocation}
        />
        <Place
        carddata={this.state.placeQuery} locationdata={this.state.locationQuery}
        />
      </>
    );
  }
}

export default Card;

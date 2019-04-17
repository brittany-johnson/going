import React from 'react';

import Place from './place/Place.js';
import Selection from './selection/Selection.js';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      foodQuery: '',
      locationQuery: '',
    }
  };

  updateFood = (selectionChange) => {
    this.setState({
        foodQuery: selectionChange,
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
        updateFood={this.updateFood} updateLocation={this.updateLocation}
        />
        {this.state.foodQuery, this.state.locationQuery && (
          <Place
          fooddata={this.state.foodQuery} locationdata={this.state.locationQuery}
          />
        )}
      </>
    );
  }
}

export default Card;

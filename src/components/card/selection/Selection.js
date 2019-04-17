import React from 'react';

import CategorySelection from './components/CategorySelection.js';
import LocationSelection from './components/LocationSelection.js';

class Selection extends React.Component {

  render(props) {
    return(
      <>
        <CategorySelection updateFood={this.props.updateFood} />
        <LocationSelection updateLocation={this.props.updateLocation}/>
      </>
    );
  }
}

export default Selection;

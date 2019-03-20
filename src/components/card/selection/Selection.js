import React from 'react';

import CategorySelection from './components/CategorySelection.js';
import LocationSelection from './components/LocationSelection.js';

class Selection extends React.Component {

  render(props) {
    return(
      <>
        <CategorySelection updateCardData={this.props.updateCardData} />
        <LocationSelection updateLocation={this.props.updateLocation}/>
      </>
    );
  }
}

export default Selection;

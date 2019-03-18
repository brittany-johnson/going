import React from 'react';

import CategorySelection from './components/CategorySelection.js';

class Selection extends React.Component {

  render(props) {
    return(
      <CategorySelection updateCardData={this.props.updateCardData}/>
    );
  }
}

export default Selection;

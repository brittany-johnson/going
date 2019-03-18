import React from 'react';

import Place from './place/Place.js';
import Selection from './selection/Selection.js';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      placeQuery: '',
    }
  };

  updateCardData = (selectionChange) => {
    this.setState({
        placeQuery: selectionChange,
    })
  };

  componentDidMount() {
    console.log("mount");
  }

  render() {
    return(
      <>
        <Selection updateCardData={this.updateCardData}/>
        <Place carddata={this.state.placeQuery} testThis='pizza'/>
      </>
    );
  }
}

export default Card;

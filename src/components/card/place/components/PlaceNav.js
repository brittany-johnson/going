import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class PlaceNav extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <ButtonToolbar>
        <Button variant="primary" onClick={this.props.back}>Back</Button>
        <Button variant="primary">Save</Button>
        <Button variant="primary" onClick={this.props.next}>Next</Button>
      </ButtonToolbar>
    );
  }
}

export default PlaceNav;

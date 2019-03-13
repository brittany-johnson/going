import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class GoGoNav extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <Button variant="primary">Back</Button>
        <Button variant="primary">Save</Button>
        <Button variant="primary">Next</Button>
      </ButtonToolbar>
    );
  }
}

export default GoGoNav;

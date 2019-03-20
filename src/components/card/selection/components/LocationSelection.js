import React from 'react';
import { Form, Button } from 'react-bootstrap';

class LocationSelection extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: " ",
    }
  }

  handleChange = (event) => {
   this.setState({value: event.target.value});
 }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateLocation(this.state.value);
 }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control
        type="text"
        value={this.state.value}
        onChange = {this.handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
  }
}

export default LocationSelection;

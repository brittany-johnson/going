import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

class CategorySelection extends React.Component {
  constructor(props){
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      value: " "
    }
  };
  onSelect(event){
    this.setState({value: event});
  }

  render() {
    return (
      <DropdownButton id="dropdown-item-button" title="Category" onSelect={this.onSelect} value={this.state.value}>
        <Dropdown.Item as="button" eventKey="breakfast">Breakfast</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="brunch">Brunch</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="lunch">Lunch</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="dinner">Dinner</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="lateNight">Late Night</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="twentyFourHrs">24hrs</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="desserts">Desserts</Dropdown.Item>
        <Dropdown.Item as="button" eventKey="coffee">Coffee</Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default CategorySelection;

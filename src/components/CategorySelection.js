import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

class CategorySelection extends React.Component {
  render() {
    return (
      <DropdownButton id="dropdown-item-button" title="Category">
        <Dropdown.Item as="button">Breakfast</Dropdown.Item>
        <Dropdown.Item as="button">Brunch</Dropdown.Item>
        <Dropdown.Item as="button">Lunch</Dropdown.Item>
        <Dropdown.Item as="button">Dinner</Dropdown.Item>
        <Dropdown.Item as="button">Late Night</Dropdown.Item>
        <Dropdown.Item as="button">24hrs</Dropdown.Item>
        <Dropdown.Item as="button">Desserts</Dropdown.Item>
        <Dropdown.Item as="button">Coffee</Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default CategorySelection;

import React from 'react';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';

import placesToken from '../../../api/keys';
import Places from '../../../api/api';

import PlaceNav from './components/PlaceNav.js';

class Place extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch(`${Places.urlBody}${Places.query}+${Places.location}&key=${placesToken}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
            name: json,
        })
      });
  }

  render() {
    let { name } = this.state;
    console.log(name);
    return (
      <>
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{name.name}</Card.Title>
            <Card.Text>
              Quick blub about restaurant.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>4/5</ListGroupItem>
            <ListGroupItem>9AM-10PM</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">ho</Card.Link>
          </Card.Body>
        </Card>
        <PlaceNav />
      </>
    );
  }
}

export default Place;

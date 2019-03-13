import React from 'react';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';

import placesToken from '../api/keys';

class EstablishmentCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://maps.googleapis.com/maps/api/js?key={placesKey}=places')
      .then(res => res.text())
      .then(json => {
        this.setState({
            isLoaded: true,
            name: json,
        })
      console.log(json);
      });
  }

  render() {

    let { isLoaded, name } = this.state;

    if (!isLoaded) {
      return <div>Loading... </div>
    } else {
      return <div>I'm here bitch! </div>
    }
    return (
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Restaurant Name</Card.Title>
          <Card.Text>
            Quick blub about restaurant.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>4/5</ListGroupItem>
          <ListGroupItem>9AM-10PM</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Let's Go!</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default EstablishmentCard;

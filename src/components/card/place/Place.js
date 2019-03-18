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
    }
  }
  //
  // fetchGooglePlaces() {
  //   // fetch(`${Places.urlBody}${this.props.carddata}+${Places.location}&key=${placesToken}`)
  //   fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.props.testThis}+Houston&key=${placesToken}`)
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //           name: json,
  //           carddata: '',
  //       })
  //     });
  // }

  componentDidMount() {
    // this.fetchGooglePlaces();
  }

  componentDidUpdate(prevProps) {
    if(this.props.carddata !== prevProps.carddata) {
      this.setState({
          carddata: this.props.carddata,
      })
      fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.props.carddata}+Houston&key=${placesToken}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
              name: json.results,
              carddata: this.props.carddata,
          })
        });
    }
  }

  render() {
    let { name } = this.state;
    console.log(name);
    const placeCard = name.map((name) =>
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{name.name}</Card.Title>
            <Card.Text>
              Quick blub about restaurant.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{name.rating}</ListGroupItem>
            <ListGroupItem>9AM-10PM</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">ho</Card.Link>
          </Card.Body>
        </Card>
    )
    return (
      <>
      {placeCard}
      <PlaceNav />
      </>
    );
  }
}

export default Place;

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

//move this function to /api
//add param that takes the fetch URL, prop name,
//try to make reusable
  fetchGooglePlaces(prevProps) {
    if(this.props.carddata !== prevProps.carddata || this.props.locationdata !== prevProps.locationdata)
    {
      this.setState({
          carddata: this.props.carddata,
          locationdata: this.props.locationdata,
      })
      fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.props.carddata}+${this.props.locationdata}&key=${placesToken}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
              name: json.results,
              carddata: this.props.carddata,
              locationdata: this.props.locationdata,
          })
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ', error.message);
        });
    }
  }

  componentDidUpdate(prevProps) {
    this.fetchGooglePlaces(prevProps);
  }

  render() {
    //add a button/slider to change the view
      //this will change the state of this.state.placeView (for example)
    //wrap this in an if statement and use the state to test
    let { name } = this.state;
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

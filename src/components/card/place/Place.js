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

//// TODO: Bug - fetch is happening 3 times ?? Why :< or is the state being set 3 times?? Oh! I'm setting the state twice and then fetching so maybe that's why i see it logging 3 times.... OH! I'm updating each time i get new props. I'm getting data from 2 other comp. from selection.

  fetchGooglePlaces(prevProps) {
      fetch(`${Places.urlBody}${this.props.carddata}+${this.props.locationdata}&key=${placesToken}`)
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
        })
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
//// TODO: not fetching data, assuming state is not being set?
componentDidMount() {
  this.fetchGooglePlaces();
  // console.log("Hey");
  console.log(this.state.name);
}

shouldComponentUpdate(nextProps, nextState){
  if (this.props.carddata !== nextProps.carddata || this.props.locationdata !== nextProps.locationdata) {
    console.log('updating');
    return true;
  }else {
    return false;
  }
}

  componentDidUpdate(prevProps) {
    if (this.props.carddata !== prevProps.carddata || this.props.locationdata !== prevProps.locationdata) {
      this.fetchGooglePlaces(prevProps);
  }
    // console.log(this.state.name);
  }

  render() {
    //add a button/slider to change the view
      //this will change the state of this.state.placeView (for example)
    //wrap this in an if statement and use the state to test
    let { name } = this.state;

    const shuffledCards = this.shuffle(name);
    const randomCards = shuffledCards.map((card) =>
        <Card style={{ width: '30rem' }} key={card.id}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>
              Quick blub about restaurant.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{card.rating}</ListGroupItem>
            <ListGroupItem>9AM-10PM</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">ho</Card.Link>
          </Card.Body>
        </Card>
    )
    return (
      <>
        {randomCards}
        <PlaceNav />
      </>
    );
  }
}

export default Place;

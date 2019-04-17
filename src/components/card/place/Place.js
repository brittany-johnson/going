import React from 'react';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';

import placesToken from '../../../api/keys';
import Places from '../../../api/api';

import PlaceNav from './components/PlaceNav.js';

class Place extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      cardNumber: 0,
      multiCardView: true, 
      singleCardView: false,
    }
  }

//move this function to /api
//add param that takes the fetch URL, prop name,
//try to make reusable

//// TODO: Bug - fetch is happening 3 times ?? Why :< or is the state being set 3 times?? Oh! I'm setting the state twice and then fetching so maybe that's why i see it logging 3 times.... OH! I'm updating each time i get new props. I'm getting data from 2 other comp. from selection.

  fetchGooglePlaces = (prevProps) => {
      fetch(`${Places.urlBody}${this.props.fooddata}+${this.props.locationdata}&key=${placesToken}`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            cardData: json.results,
              fooddata: this.props.fooddata,
              locationdata: this.props.locationdata,
          })
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ', error.message);
        })
  }

  shuffle = (array) => {
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

  switchCardView = () => {
    this.state.singleCardView ? this.setState({singleCardView: false}) : this.state.multiCardView ? this.setState({multiCardView: false}) : console.log("hello");
  }

componentDidMount = () => {
  this.fetchGooglePlaces();
  // console.log("Hey");
  console.log(this.state.cardData);
  // this.switchCardView();
}

shouldComponentUpdate = (nextProps, nextState) => {
  if (this.props.fooddata !== nextProps.fooddata || this.props.locationdata !== nextProps.locationdata) {
    console.log('updating');
    return true;
  }else {
    return false;
  }
}

  componentDidUpdate = (prevProps) => {
    if (this.props.fooddata !== prevProps.fooddata || this.props.locationdata !== prevProps.locationdata) {
      this.fetchGooglePlaces(prevProps);
  }
    console.log(this.state.cardData);
    console.log(this.state.singleCardView);
  }

  next = () => {
    if (this.state.cardNumber !== this.state.cardData.length) {
      this.setState({
        cardNumber: + 1,
      })
    }
    console.log(this.state.cardData[this.state.cardNumber])
  }

  back = () => {
    if (this.state.cardNumber !== 0) {
      this.setState({
        cardNumber: - 1,
      })
    }
    console.log(this.state.cardData[this.state.cardNumber])
  }

  generateCards() {
    let { cardData, multiCardView, singleCardView, cardNumber } = this.state;
    const shuffledCards = this.shuffle(cardData);
    if (multiCardView) {
      const multicardView = shuffledCards.map((card) => {
        return (
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
        );
      })
      return multicardView;
    } else if (singleCardView) {
      let {cardNumber, cardData} = this.state;
      console.log(cardData);
      return (
        <div>
         <Card style={{ width: '30rem' }} >
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{cardData[cardNumber].name}</Card.Title>
            <Card.Text>
              Quick blub about restaurant.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{shuffledCards[cardNumber].rating}</ListGroupItem>
            <ListGroupItem>9AM-10PM</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">ho</Card.Link>
          </Card.Body>
          </Card>
        </div>
      )
    }
    console.log(shuffledCards[cardNumber]);
  }

  render() {
    return (
      <>
        {this.generateCards()}
        <PlaceNav next={this.next} back={this.back}/>
      </>
    );
  }
}

export default Place;

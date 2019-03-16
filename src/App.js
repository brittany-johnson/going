import React from 'react';
import NavBar from './components/navBar/NavBar.js';
import Card from './components/card/Card.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Card />
      </div>
    );
  }
}

export default App;

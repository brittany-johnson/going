import React from 'react';
import NavBar from './components/NavBar.js';
import Selection  from './components/Selection.js';
import Card from './components/Card.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Selection />
        <Card />
      </div>
    );
  }
}

export default App;

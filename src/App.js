import React from 'react';
import NavBar from './components/NavBar.js';
import CategorySelection  from './components/CategorySelection.js';
import EstablishmentCard from './components/EstablishmentCard.js';
import GoGoNav from './components/CardNav.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CategorySelection />
        <EstablishmentCard />
        <GoGoNav />
      </div>
    );
  }
}

export default App;

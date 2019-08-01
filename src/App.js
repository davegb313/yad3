import React from 'react';
import './App.css';

import MakeListing from './MakeListing';
import Listings from './Listings';

class App extends React.Component {

  state = {
    listings: [],
  }

  componentDidMount(){
    fetch('/listing')
      .then(response => response.json())
      .then(listings => this.setState({ listings }))
  }

  reload = ()=> fetch('/listing')
    .then(response => response.json())
    .then(listings => this.setState({ listings }));

  render() {
    return (
      <div className="App">
        <Listings listings={this.state.listings}/>
        <MakeListing triggerReload={this.reload}/>
      </div>
    );
  }
}

export default App;

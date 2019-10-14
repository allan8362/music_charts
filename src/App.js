import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import MusicContainer from './containers/MusicContainer';
import NavBar from './components/NavBar';

class App extends Component {
  render(){
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/music" component={MusicContainer} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

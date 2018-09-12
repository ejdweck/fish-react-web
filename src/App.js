import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Player } from 'video-react'
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Fish are Friends, but also sometimes food haha</h1>
          <p>Bert's got the first fish</p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <img className="fish-stream" src="http://meatier-eland-4630.dataplicity.io/?action=stream" />
      </div>
    );
  }
}

export default App;

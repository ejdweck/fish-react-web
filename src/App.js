import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Player } from 'video-react'
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron className="header">
          <h1>GET YOUR CUSTOM FISH TODAY</h1>
          <h1>WE HAVE THE BEST FISH</h1>
          <Button bsStyle="success">Light</Button>
          <Button bsStyle="danger">Feed</Button>
        </Jumbotron>
        <img className="fish-stream" src="https://meatier-eland-4630.dataplicity.io/?action=stream" />
        <Jumbotron className="footer">

        </Jumbotron>

      </div>
    );
  }
}

export default App;

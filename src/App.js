import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
// request in component did mount
  componentDidMount() {
    // axios
    //   .get('/healthcheck') // point to the route of the app, and it is the webpack server at 3000
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
// CORS => error when jumping from one domiain to another (cross domain) and for security it is breaking
// to make it work, use a proxy => proxy will point to where we want to get the data
// when you get request to 3000, change it to the api at 3001
      // axios
      // .get('http://localhost:3001/healthcheck') // a lot of assumption on how it is suport to work. point to localhost is bad, how will it works on prod 
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    // will redirect the root of the app to 3001
      axios
      .get('/healthcheck') // a lot of assumption on how it is suport to work. point to localhost is bad, how will it works on prod 
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

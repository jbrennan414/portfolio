import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ContentContainer from './components/ContentContainer';

class App extends Component {
  render() {
    console.log("IT WORKED")
    return (
      <div className="App">
        <Header />
        <ContentContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../App.css';
import Bio from './Bio';
import Projects from './Projects';

export default class ContentContainer extends Component {
    render() {
        return (
            <div className="App">
                <Bio />
                <Projects />
            </div>
    );
  }
}

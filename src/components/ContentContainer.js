import React, { Component } from 'react';
import '../App.css';
import Bio from './Bio';
import Projects from './Projects';
import Contact from './Contact';

export default class ContentContainer extends Component {
    render() {
        return (
            <div className="App">
                <Bio />
                <Projects />
                <Contact />
            </div>
    );
  }
}

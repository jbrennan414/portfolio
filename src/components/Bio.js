import React, { Component } from 'react';
import '../App.css';

export default class Bio extends Component {
    render() {

        const headshot = require('../assets/img/John_Brennan.jpg');

        return (
            <div className="projects">
                <img src={headshot} height={300} width={200} />
            </div>
    );
  }
}

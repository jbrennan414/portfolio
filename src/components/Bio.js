import React, { Component } from 'react';
import '../App.css';

export default class Bio extends Component {
    render() {

        const headshot = require('../assets/img/John_Brennan.jpg');

        return (
            <div className="bio">
                <img alt="headshot" src={headshot} height={300} width={200} />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br />
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br />
                    non proident, sunt in culpa qui officia deserunt mollit <br />
                    anim id est laborum. 
                </p>
            </div>
        );
    }
}

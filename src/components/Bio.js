import React, { Component } from 'react';
import '../App.css';

export default class Bio extends Component {
    render() {

        const headshot = require('../assets/img/John_Brennan.jpg');
        console.log("trigger a new build")

        return (
            <div className="bio">
                <img alt="headshot" src={headshot} height={300} width={200} />
                <p>
                    Hey there, I'm John! I'm a fullstack software developer. <br />
                    I'm constantly learning new technologies and understanding <br />
                    older ones! I'm passionate about building elegant, functional <br />
                    tools for small business and myself. Most of my projects <br />
                    you'll find below are a utility that I couldn't find online, <br />
                    I needed an app to decide which 14'er to climb, I wanted to <br />
                    understand how web sockets work, or I wanted a better way to <br />
                    query heisman trophy winners, you'll find all of that below! <br />
                    I do freelance projects periodically, maybe we'd make a good fit, <br />
                    please don't hesitate to contact me! <br />
                </p>
            </div>
        );
    }
}

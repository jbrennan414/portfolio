import React, { Component } from 'react';
import '../App.css';
import projects from '../data/projects';

const reactLogo = require('../assets/img/react.svg');
const reduxLogo = require('../assets/img/redux.svg');
const socketIO = require('../assets/img/socket-io.svg');
const githubLogo = require('../assets/img/github.svg')

export default class Projects extends Component {

    renderProjectCard(project, i){
        return (
            <a className="projectCard" href={project.link} key={i}>
                <h2>{project.name}</h2>
                <h3>{project.description}</h3>
                <div>
                    {project.uses.includes("react") ? (
                        <img alt="reactLogo" src={reactLogo} height={50} width={50} />
                    ): ""}
                    {project.uses.includes("redux") ? (
                        <img alt="reduxLogo" src={reduxLogo} height={50} width={50} />
                    ): ""}
                    {project.uses.includes("socketio") ? (
                        <img alt="socketIO logo" src={socketIO} height={50} width={50} />
                    ): ""}
                </div>
                <div className="githubLogo">
                    <a href={project.github} id="bottle" onclick="document.location=this.id+'.html';return false;" >
                        <img class="github" alt="github logo" src={githubLogo} height={25} width={25} />
                    </a>


                </div>
            </a>
        );
    }

    render() {

        return (
            <div className="header">
                <h1>PROJECTS</h1>
                <div className="projectsContainer">
                    {projects.map(this.renderProjectCard)}
                </div>
            </div>
    );
  }
}

import React, { Component } from 'react';
import '../App.css';
import projects from '../data/projects';

const reactLogo = require('../assets/img/react.svg');
const reduxLogo = require('../assets/img/redux.svg');
const socketIO = require('../assets/img/socket-io.svg');
const githubLogo = require('../assets/img/github.svg');
const firebaseLogo = require('../assets/img/firebase.svg');
const jitsiLogo = require('../assets/img/jitsi.svg');
const ec2Logo = require('../assets/img/ec2.svg');

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
                    {project.uses.includes("firebase") ? (
                        <img alt="firebase logo" src={firebaseLogo} height={50} width={50} />
                    ): ""}
                    {project.uses.includes("jitsi") ? (
                        <img alt="jitsi logo" src={jitsiLogo} height={50} width={50} />
                    ):""}
                    {project.uses.includes("ec2") ? (
                        <img alt="ec2 logo" src={ec2Logo} height={50} width={50} />
                    ):""}
                </div>
                {project && project.github && 
                    <div className="githubLogo">
                        <a href={project.github} id="bottle" onClick="document.location=this.id+'.html';return false;" >
                            <img className="github" alt="github logo" src={githubLogo} height={25} width={25} />
                        </a>
                    </div>
                }
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

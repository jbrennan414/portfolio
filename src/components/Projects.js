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
const nodeLogo = require('../assets/img/nodejs.svg');
const redisLogo = require('../assets/img/redis.svg');

export default class Projects extends Component {

    renderProjectCard(project, i){
        return (
            <a className="projectCard" href={project.link} key={i}>
                
                {project.under_construction ? (
                        <h5 className={"ribbon"}>Under construction</h5>
                    ): ""}

                <h2>{project.name}</h2>
                <h3>{project.description}</h3>
                <div className={'resources-utilized'}>
                    {project.uses.includes("react") ? (
                        <img className={"dependencies-used"} alt="reactLogo" src={reactLogo} height={50} width={50} />
                    ): ""}
                    {project.uses.includes("redux") ? (
                        <img className={"dependencies-used"} alt="reduxLogo" src={reduxLogo} height={50} width={50} />
                    ): ""}
                    {project.uses.includes("socketio") ? (
                        <img className={"dependencies-used"} alt="socketIO logo" src={socketIO} height={50} width={50} />
                    ): ""}
                    {project.uses.includes("firebase") ? (
                        <img className={"dependencies-used"} alt="firebase logo" src={firebaseLogo} height={50} width={50} />
                    ): ""}
                    {project.uses.includes("jitsi") ? (
                        <img className={"dependencies-used"} alt="jitsi logo" src={jitsiLogo} height={50} width={50} />
                    ):""}
                    {project.uses.includes("ec2") ? (
                        <img className={"dependencies-used"} alt="ec2 logo" src={ec2Logo} height={50} width={50} />
                    ):""}
                    {project.uses.includes("node") ? (
                        <img className={"dependencies-used"} alt="node logo" src={nodeLogo} height={50} width={50} />
                    ):""}
                    {project.uses.includes("redis") ? (
                        <img className={"dependencies-used"} alt="redis logo" src={redisLogo} height={50} width={50} />
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

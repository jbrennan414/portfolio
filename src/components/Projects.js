import React, { Component } from 'react';
import '../App.css';
import projects from '../data/projects';

import reactLogo from "../assets/img/react.svg";
import reduxLogo from "../assets/img/redux.svg";
import socketIO from "../assets/img/socket-io.svg";
import githubLogo from "../assets/img/github.svg";
import firebaseLogo from "../assets/img/firebase.svg";
import jitsiLogo from "../assets/img/jitsi.svg";
import ec2Logo from "../assets/img/ec2.svg";
import nodeLogo from "../assets/img/nodejs.svg";
import redisLogo from "../assets/img/redis.svg";

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

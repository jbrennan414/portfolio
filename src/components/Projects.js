import React, { Component } from 'react';
import '../App.css';
import projects from '../data/projects';

export default class Projects extends Component {

    renderProjectCard(project, i){
        return (
            <a className="projectCard" href={project.link} key={i}>
                <h1>{project.name}</h1>
                <h3>{project.description}</h3>
                <h3>{project.uses}</h3>
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

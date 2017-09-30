import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [{
        title: 'Calc-you-later',
        description: 'A simple calculator built with vanilla JS. A good exercise in coding logic and writing functions in JS.',
        pic: '/images/projectstyle/schematics.jpg',
        link: 'https://github.com/vitalcog/calc-u-later',
      },
        {
          title: 'itunes API project',
          description: 'A simple web page built with vanilla JS to practice using third party API\'s.',
          pic: '/images/projectstyle/sound_colors.jpg',
          link: 'https://github.com/vitalcog/i_tunes_api_project',
        },
        {
          title: 'Back-end fundamentals',
          description: 'Not much to look at. A basic back-end server using node.js, express, and a SQL database (PostgreSQL).',
          pic: '/images/projectstyle/rube_machine_lightblue.jpg',
          link: 'https://github.com/vitalcog/weekSevenProject',
        },
        {
          title: 'A star wars spoof theme',
          description: 'One of my very first React practice sessions. Uses a star wars API. Just a basic warm-up to start learning some things.',
          pic: 'https://media.giphy.com/media/opaW9pDmsj3Co/giphy.gif',
          link: 'https://github.com/vitalcog/maybe_starWars',
        }],
    };
  }
  render() {
    const project = this.state.project;
    const index = this.props.select;

      return(
        <div id="projectDiv">
          <img
            id="projectImage"
            alt="that roughly relates to the project description"
            src={project[index].pic}
          />
          <p className="projectText">
            {project[index].title}
          </p>
          <p className="projectText">
            {project[index].description}
          </p>
          <a id="hubLink" href={project[index].link} target="_blank">check it out on GitHub!</a>
        </div>
      );
  }
}

export default Project;

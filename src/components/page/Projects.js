import React, { Component } from 'react';
import Project from '../Project';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 1,
    };
  }

  lowerState() {
    if (this.state.select > 1) {
      this.setState({
        select: this.state.select - 1,
      });
    } else {
      this.setState({
        select: 4,
      });
    }
  }

  raiseState() {
    if (this.state.select < 4) {
      this.setState({
        select: this.state.select + 1,
      });
    } else {
      this.setState({
        select: 1,
      });
    }
  }

  render() {
    return(
      <div>
      <p className="centeredText">Check out all these awesome things that I've done!</p>
      <span>
        <button onClick= {() => this.lowerState()} > &#60; </button>
        <Project select={this.state.select}/>
        <button onClick= {() => this.raiseState()}> &#62; </button>
      </span>
    </div>
    );
  }
}

export default Projects;

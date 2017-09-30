import React, { Component } from 'react';
import Project from '../Project';
import StarBar from '../StarRatingBar/StarBar';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
    };
  }

  lowerState() {
    if (this.state.select > 0) {
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
        select: 0,
      });
    }
  }

  render() {

    if (this.state.select === 4) {
        return (
          <div>
          <p className="centeredText">Check out all these awesome things that I've done!</p>
          <span>
            <div className="selector" onClick= {() => this.lowerState()} > &#60; </div>
            <div id="projectDiv">
              <p>Check out this thingy!</p>
              <StarBar />
              <p className="projectText" id="specialCaseText">
                It's actually a seperate component, built of other components
                from a completely seperate project that I reused here just to show
                that I could!
              </p>
              <div className="spacer"></div>
            </div>
            <div className="selector" onClick= {() => this.raiseState()}> &#62; </div>
          </span>
        </div>
      );
    } else {
      return (
        <div>
        <p className="centeredText">Check out all these awesome things that I've done!</p>
        <span>
          <div className="selector" onClick= {() => this.lowerState()} > &#60; </div>
          <Project select={this.state.select}/>
          <div className="selector" onClick= {() => this.raiseState()}> &#62; </div>
        </span>
      </div>
      );
    }
  }
}

export default Projects;

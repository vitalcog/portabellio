import React, { Component } from 'react';
import ResumeSnips from '../ResumeSnips';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snip: 1,
    };
  }

  whichSnip() {
    this.state.snip < 5 ?
    this.setState({snip: this.state.snip + 1}) :
    this.setState({snip : 1});
  }

  render() {
    return(
      <div id="resumeDiv" className="flexDiv">
        <a
          id="resumeLink"
          href="https://www.linkedin.com/in/chad-windham-b3a06814b/"
          target="_blank">
          Look me up on LinkedIn
        </a>
        <ResumeSnips snip={this.state.snip} />
        <div onClick={() => this.whichSnip()}
          className="selector"
          id="next">
          &#62;
        </div>
      </div>
    );
  }
}

export default Resume;

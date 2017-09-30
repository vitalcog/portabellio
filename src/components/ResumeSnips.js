import React, { Component } from 'react';

class ResumeSnips extends Component {
  render() {
    if (this.props.snip === 1) {
      return(
        <div>
          <p className="centeredText">You should hire me.</p>
          <p className="centeredText">I'm really awesome.</p>
          <p className="centeredText">Seriously...</p>
          <p className="centeredText">Just do it.</p>
        </div>
      );
    } else if (this.props.snip === 2) {
      return(
        <div className="flexDiv">
          <p className="centeredText">
            More information about me is available in the link above
          </p>
          <p className="centeredText">
            You should take a look at the code running this. It might not be the most amazing stuff you've ever seen, but I think it's legit for an entry level developer. Like I said, this is all to show I have most of the basics down, but what I love most about web devolpment is that there is always more to learn. And that's what excites me!
          </p>
        </div>
      );
    } else if (this.props.snip === 3) {
      return(
        <div>
          <p className="centeredText">So go ahead! Snoop around.</p>
          <img
            id="inspectionPic"
            src="https://media.giphy.com/media/3o7ZeGFFAZUc79Dsxq/giphy.gif"
          />
        </div>
      );
    } else if (this.props.snip === 4) {
      return(
        <div>
          <p className="centeredText">
            So, would I be a good addition to your team? (Yes very likely...)
          </p>
          <p className="centeredText">
            But would you be a good match for me?
          </p>
          <p className="centeredText">
            I'm looking for an environment were I can not only be challenged daily and forced to continue to grow and further develop my skill set but also be provided with an atmosphere that is helpful and nurturing for a fledgling web developer such as myself.
          </p>
        </div>
      );
    } else if (this.props.snip === 5) {
      return(
        <div>
          <p className="centeredText">
            Now, back to my original point.
          </p>
        </div>
      );
    }
  }
}

export default ResumeSnips;

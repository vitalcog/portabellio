import React, { Component } from 'react';

class Home extends Component {
  render() {
    return(
      <div>
        <article>
          <p>Hello you lucky boys and girls.
           Prepare to feast your eyeballs upon
           my AWESOMENESS! The point of this one
           page web app is to demonstrate my proficiency
           with the basics of using React. Other than all
           the images pirated from the internet, this content
           is 100% original. (Best if viewed full screen on
           a computer.)
         </p>

         <img
           id="wowGIF"
           alt="pure great-ness"
           src="https://media.giphy.com/media/3o6Zt46ATnuZcypHpK/giphy.gif"
         />
        </article>
      </div>
    );
  }
}

export default Home;

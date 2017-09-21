import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return(
      <div className="contactDiv">
        <p>Contact Via</p>
        <p>
          phone 777-777-7777.
          Feel free to leave a message,
          but a short, accurate text is better
        </p>
        <p>email is example@email.com</p>
        <p>
          I have no fax machine,
          1992 called they wanted it back...
        </p>
        <p>
          GPS cordinates are
          Latitude: 35.227703 | Longitude: -80.846179
        </p>
      </div>
    );
  }
}

export default Contact;

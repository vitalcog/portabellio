import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Home from './components/page/Home';
import Contact from './components/page/Contact';
import Projects from './components/page/Projects';
import Resume from './components/page/Resume';

class App extends Component {
  render() {
    return (
      <div id="whole_shibang">
        <span id="navSpan">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/projects">Projects</Link>
          <Link className="link" to="/resume">Resume</Link>
          <Link className="link" to="/contact">Contact</Link>
        </span>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <footer>
          <img alt="cute little footer" src={require('./images/cogwheels_wide_pic.jpg')} />
        </footer>
      </div>
    );
  }
}

export default withRouter(App);

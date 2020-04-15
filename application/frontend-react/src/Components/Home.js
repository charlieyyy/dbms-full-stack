import React, { Component } from 'react';

class Home extends Component {
  render() {

    return (
        <div className="row banner">
      
        <div className="banner-text">
           <h1 className="responsive-headline" style={{ color: '#FFF' }}>Air Quality Tracker</h1>
           <hr />
           <h3 style={{ color: '#FFF' }}>Tracking the economic activity by monitoring air quality</h3>
           <hr />
           <ul className="social">
              <a href="https://github.com/charlieyyy" className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
              <a href="https://github.com/charlieyyy" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
           </ul>
        </div>
     </div>
    );
  }
}

export default Home;

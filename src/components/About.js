import React from 'react';
import PageTransition from './PageTransition';
import AboutPageOne from './AboutPageOne'
import AboutPageTwo from './AboutPageTwo'
import './About.css';


class About extends React.Component {
  constructor(props) {
    super (props);
    this.state = {isPageOne: true};
    this.togglePage = this.togglePage.bind(this);
  }

  togglePage() {
    let currState = this.state.isPageOne;
    this.setState({isPageOne: !currState})
  }

  render() {
    return (
      <div className="about">
        {this.state.isPageOne? <AboutPageOne/>: <AboutPageTwo/>}
        <PageTransition isPageOne={this.state.isPageOne} className="page-transition no-jQuery" togglePage={this.togglePage}/>
      </div>
    );
  }
}

export default About;

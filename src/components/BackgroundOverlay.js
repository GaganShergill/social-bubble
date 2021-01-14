import React from 'react';
import './BackgroundOverlay.css';

class BackgroundOverlay extends React.Component {
  constructor(props) {
    super (props);
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="background-overlay">
        <div className="bubble x1" onClick={this.toggle}></div>
        <div className="bubble x2" onClick={this.toggle}></div>
        <div className="bubble x3" onClick={this.toggle}></div>
        <div className="bubble x4" onClick={this.toggle}></div>
        <div className="bubble x5" onClick={this.toggle}></div>
        <div className="bubble x6" onClick={this.toggle}></div>
        <div className="bubble x7" onClick={this.toggle}></div>
        <div className="bubble x8" onClick={this.toggle}></div>
        <div className="bubble x9" onClick={this.toggle}></div>
        <div className="bubble x10" onClick={this.toggle}></div>
      </div>
    );
  }
}

export default BackgroundOverlay;

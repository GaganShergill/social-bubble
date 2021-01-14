import React from 'react';
import Lottie from 'react-lottie';

class Logo extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        isStopped: true
      };

      this.defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: this.props.img,
        redererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      const currentState = this.state.isPaused;
      this.setState({isStopped: !currentState});
    }

    render() {
      return (
        <div className={this.props.className} onMouseUp={this.toggle}>
          <Lottie
            options= {this.defaultOptions}
            isStopped={true}
          />
        </div>
        );
    }
}


export default Logo;

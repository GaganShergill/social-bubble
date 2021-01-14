import React from 'react';
import arrow_down from '../lotties/arrow_down'
import Lottie from 'react-lottie';

function ArrowDown(props) {

    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: arrow_down,
      preserveAspectRatio: "XMidYMid meet"
    };

    return (
      <div className={props.className}>
        <Lottie
          options= {defaultOptions}
          isStopped= {props.isStopped}
        />
      </div>
      );
}


export default ArrowDown;

import React from 'react';
import friends_group_img from '../assets/friends_group.svg';
import BackgroundOverlay from './BackgroundOverlay';
import BubbleButton from './BubbleButton';
import './AboutPageOne.css';

function AboutPageOne(props) {
  return (
    <div className="about-page-one">
    <BackgroundOverlay/>
    <div className="intro-block">
      <div className="row no-gutters">
        <div className="order-2 order-sm-1 d-flex flex-column justify-content-center align-items-center col-10 col-sm-6 col-md-5">
          <div className="intro-text-block">
            <div className="intro-text-content">
              <h1>Meet Other Groups</h1>
              <h2>Expand your Social Bubble</h2>
              <BubbleButton className="m-2" text="Log in" to='/login'/>
              <BubbleButton className="m-2" text="Get Started" to='/login'/>
            </div>
          </div>
        </div>
        <div className="order-1 order-sm-2 col-10 col-sm-6 col-md-5">
          <img id="friends-group-img" src={friends_group_img} alt="Group of Friends"/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AboutPageOne;

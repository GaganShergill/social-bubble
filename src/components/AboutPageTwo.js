import React from 'react';
import './AboutPageTwo.css';

function AboutPageTwo() {
  return (
    <div className="about-page-two">
      <div className="product-info-block">
        <div className="action no-gutters">
          <div className="action-text left">
            <h1 className="font-nueropolitical">Plan</h1>
            <p>A Place where you can plan the events/activities/outings
              with your friends and invite other groups to join in to merge it
              into a bigger group.
            </p>
          </div>
          <div className="action-arrow-right"></div>
          <div className="action-image" id="plan-image"></div>
        </div>

        <div className="action no-gutters">
          <div className="action-image" id="join-image"></div>
          <div className="action-arrow-left"></div>
          <div className="action-text right">
            <h1 className="font-nueropolitical">Join</h1>
            <p>You and your friends can also join in on the adventure with
               other social groups.
            </p>
          </div>
        </div>
        <div className="post-block">
          <span className="font-nueropolitical">Make Memories</span>
        </div>
      </div>


      <div className="gallery-block">
        <iframe title='gallery video 1' id="gallery-video-1" className="gallery-video" src="https://www.youtube.com/embed/n40diL5Ppgg"
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture" allowFullScreen>
        </iframe>
        <div className="gallery-image" id="gallery-image-1"></div>
        <div className="gallery-image" id="gallery-image-2"></div>
        <div className="gallery-image" id="gallery-image-3"></div>
        <div className="gallery-image" id="gallery-image-4"></div>
        <iframe className="gallery-video" title='gallery video 2' id="gallery-video-2" src="https://www.youtube.com/embed/YzrICnBkChc"
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture" allowFullScreen>
        </iframe>
        <div className="gallery-image" id="gallery-image-5"></div>
        <div className="gallery-image" id="gallery-image-6"></div>
        <iframe className="gallery-video" title='gallery video 3' id="gallery-video-3" src="https://www.youtube.com/embed/XqpZGpwXfeo"
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
          picture-in-picture" allowFullScreen>
        </iframe>
        <div  id="gallery-image-7" className="gallery-image"></div>
        <div  id="gallery-image-8" className="gallery-image"></div>
      </div>

      <div className="contact-block">
        <a href="http://www.gaganshergill.ca/" target="_blank" rel="noopener noreferrer" className="mx-4">
          <i className="fa fa-globe" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/gaganshergill.ca/" target="_blank" rel="noopener noreferrer" className="mx-4">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/gaganshergill/" target="_blank" rel="noopener noreferrer" className="mx-4">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>

      <div className="last-block">
        <p>2020-2030 © All Rights Reserved. Website By Gagandeep Singh Shergill</p>
      </div>
    </div>
  );
}

export default AboutPageTwo;

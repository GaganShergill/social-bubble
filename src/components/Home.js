import React from 'react';
import './Home.css';
import Fests from '../assets/concert.webp';
import NightClub from '../assets/nightclub.jpg';
import Camping from '../assets/camping.webp';
import ExploreCity from '../assets/explore-city.jpg';
import Adventure from '../assets/adventure_sport.jpg';
import MeetFriends from '../assets/restaurant.webp';
import NorthEastIndia from '../assets/north-east-india.jpg';
import NorthIndia from '../assets/north-india.webp';
import SouthIndia from '../assets/south-india.png';
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="card main-category">
        <div className="card-header">
            <h2>Events</h2>
            <NavLink className='see-all' to={{
              pathname: '/listing',
              state: {choice: 'events'}
            }}>
              See All >
            </NavLink>
        </div>

        <div className="card-body">
          <div className="card sub-category">
            <h4 className="card-header">Concerts</h4>
            <div className="card-image">
              <img src={NightClub} alt="Concert"/>
            </div>
          </div>

          <div className="card sub-category">
            <h4 className="card-header">Fests</h4>
            <div className="card-image">
              <img src={Fests} alt="Fests"/>
            </div>
          </div>

          <div className="card sub-category">
            <h4 className="card-header">Outdoors</h4>
            <div className="card-image">
              <img src={Camping} alt="Others"/>
            </div>
          </div>
        </div>

      </div>

      <div className="card main-category my-5">
        <div className="card-header">
            <h2>Activities</h2>
            <NavLink className='see-all' to={{
              pathname: '/listing',
              state: {choice: 'activities'}
            }}>
              See All >
            </NavLink>
        </div>
        <div className="card-body">
          <div className="card sub-category">
            <h4 className="card-header">Explore City</h4>
            <div className="card-image">
              <img src={ExploreCity} alt="Explore City"/>
            </div>
          </div>

          <div className="card sub-category">
            <h4 className="card-header">Adventure Sports</h4>
            <div className="card-image">
              <img src={Adventure} alt="Adventure"/>
            </div>
          </div>

          <div className="card sub-category">
            <h4 className="card-header">Others</h4>
            <div className="card-image">
              <img src={MeetFriends} alt="Others"/>
            </div>
          </div>
        </div>
      </div>

      <div className="card main-category">
        <div className="card-header">
            <h2>Trips</h2>
            <NavLink className='see-all' to={{
              pathname: '/listing',
              state: {choice: 'trips'}
            }}>
              See All >
            </NavLink>
        </div>
        <div className="card-body">
          <div className="card sub-category">
            <h4 className="card-header">North-East India</h4>
            <div className="card-image">
              <img src={NorthEastIndia} alt="North-East India"/>
            </div>
          </div>

          <div className="card sub-category">
            <h4 className="card-header">North India</h4>
            <div className="card-image">
              <img src={NorthIndia} alt="North India"/>
            </div>
          </div>

          <div className="card sub-category">
            <h4 className="card-header">South India</h4>
            <div className="card-image">
              <img src={SouthIndia} alt="South India"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

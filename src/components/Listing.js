import React from 'react';
import './Listing.css';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    let c = (typeof props.location.state === 'undefined') ? "events" : props.location.state.choice;
    this.state = {
      choice: c,
      filter: 'all',
      details: []
    }
    this.handleDurationFilterClick = this.handleDurationFilterClick.bind(this);
    this.handleSidebarClick = this.handleSidebarClick.bind(this);
    this.contentDuration = '';
    this.post = '';
  }

  handleDurationFilterClick(e) {
    if (e.target.tagName !== 'BUTTON') {
      return
    }
    for (var el of e.currentTarget.children) {
      if (el !== e.target) {
        el.classList.remove('duration__button--active')
      }
    }
    e.target.classList.toggle('duration__button--active');

    if (e.target.classList.contains('duration__button--active')) {
      this.setState({filter: e.target.name})
    } else {
      this.setState({filter: 'all'})
    }
  }

  handleSidebarClick(e) {
    if (e.target.tagName !== 'SPAN') {
      return
    }
    if (e.target.getAttribute('name') !== this.state.choice) {
      this.setState({choice: e.target.getAttribute('name')})
    }
  }

  componentDidMount() {
    this.contentDuration = document.getElementsByClassName('content__duration')[0];
    this.setDetailState()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.choice === this.state.choice && prevState.filter === this.state.filter) {
      return
    }
    this.setDetailState()
  }

  setDetailState() {
    let data;
    if (this.state.choice === 'events') {
      this.contentDuration.classList.remove('hide');
      axios.get('https://social-bubble-backend.herokuapp.com/events/?q=' + this.state.filter, {
        headers: {
          'Authorization': localStorage.getItem('accessToken')
        }
      })
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => {
        this.setState({
          details: []
        });
      })
    } else if (this.state.choice === 'activities') {
      this.contentDuration.classList.remove('hide');
      axios.get('https://social-bubble-backend.herokuapp.com/activities/?q=' + this.state.filter, {
        headers: {
          'Authorization': localStorage.getItem('accessToken')
        }
      })
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => {
        this.setState({
          details: []
        });
      })
    } else if (this.state.choice === 'trips') {
      this.contentDuration.classList.remove('hide');
      axios.get('https://social-bubble-backend.herokuapp.com/trips/?q=' + this.state.filter, {
        headers: {
          'Authorization': localStorage.getItem('accessToken')
        }
      })
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => {
        this.setState({
          details: []
        });
      })
    } else if (this.state.choice === 'messages') {
      this.contentDuration.classList.add('hide');
      this.setState({
        details: []
      });
    } else {
      this.contentDuration.classList.remove('hide');
      this.setState({
        details: []
      });
    }
  }

  render() {
    if (this.state.choice === 'events') {
      this.post =  this.state.details.map((detail, id) =>  (
          <div key={id} className='content__post'>
            <h3>{detail.name}: {detail.type}</h3>
            <p>{detail.detail}</p>
            <span><strong>Venue:</strong> {detail.venue}</span>
            <span id='post__price'><strong>Price:</strong> {detail.price}&#8377;</span>
            <br />
            <span><strong>Date:</strong> {detail.date}</span>
            <NavLink className="post__link" to='/listing'>See More ></NavLink>
          </div>
        ))
    } else if (this.state.choice === 'activities') {
      this.post =  this.state.details.map((detail, id) =>  (
          <div key={id} className='content__post'>
            <h3>{detail.name}: {detail.type}</h3>
            <p>{detail.detail}</p>
            <span><strong>Venue:</strong> {detail.venue}</span>
            <span id='post__price'><strong>Price:</strong> {detail.price}&#8377;</span>
            <br />
            <span><strong>Date:</strong> {detail.date}</span>
            <NavLink className="post__link" to='/listing'>See More ></NavLink>
          </div>
        ))
    } else if (this.state.choice === 'trips') {
      this.post =  this.state.details.map((detail, id) =>  (
          <div key={id} className='content__post'>
            <h3>{detail.destination}</h3>
            <p>{detail.detail}</p>
            <span><strong>Nights:</strong> {detail.nights}</span>
            <span id='post__price'><strong>Price:</strong> {detail.price}&#8377;</span>
            <br />
            <span><strong>Date:</strong> {detail.date}</span>
            <NavLink className="post__link" to='/listing'>See More ></NavLink>
          </div>
        ))
    } else if (this.state.choice === 'messages') {
      this.post = ''
    } else {
      this.post = ''
    }

    return (
      <div className="listing">
        <div className="listing__sidebar" onClick={this.handleSidebarClick}>
          <span className="sidebar__category" name="events">Events
            <i className="fa fa-bullhorn" aria-hidden="true"></i>
          </span>

          <span className="sidebar__category" name="activities">Activities
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>

          <span className="sidebar__category" name="trips">Trips
            <i className="fa fa-plane" aria-hidden="true"></i>
          </span>

          <span className="sidebar__category" name="messages">Messages
            <i className="fa fa-commenting" aria-hidden="true"></i>
          </span>

          <span className="sidebar__category" name="plans">My Plans
            <i className="fa fa-handshake-o" aria-hidden="true"></i>
          </span>

        </div>

        <div className="listing__content">

          <div className="content__duration" onClick={this.handleDurationFilterClick}>
            <button name="today">Today</button>
            <button name="tommorrow">Tommorrow</button>
            <button name="week">This Week</button>
            <button name="month">This Month</button>
          </div>

          <div className="mt-4">
            {this.post}
          </div>

          </div>
      </div>
    )
  }
}

export default Listing;

import React from 'react';
import Logo from './Logo';
import logo_image from '../lotties/logo';
import {NavLink, withRouter} from 'react-router-dom';
import './NavigationBar.css';
import $ from 'jquery';

class NavigationBar extends React.Component {
  componentDidMount() {
    $(document).scroll(function () {
      let $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 1);
    });
  }

  render() {
    return (
      <nav className = "navbar navbar-light">
        <NavLink className="navbar-brand"  to="/">
          <Logo img={logo_image} className="logo"/>
        </NavLink>

        {/* if on login page, navbar shows cross icon, else it shows user-circle-icon if not authenticated or user avatar if authenticated. */}
        <ul className="navbar-nav">
          {this.props.isAuthenticated ?
            <li className="nav-item ml-3">
              <div className="dropdown">
                <button className="navbar-avatar dropdown-toggle" type="button" id="dropdownMenuButton"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                  style={{backgroundImage: "url(" + this.props.user['avatar'] + ")"}}></button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <p className="dropdown-item h6">{this.props.user['firstname']}</p>
                  <NavLink exact activeClassName="active-link" className="dropdown-item h6" to="/" onClick={this.props.logout}>
                  Logout
                  <i className="fa fa-sign-out ml-1" aria-hidden="true"></i></NavLink>
                </div>
              </div>
            </li>
             :
             <li className="nav-item">
               {(this.props.location.pathname === '/login') ?
               <NavLink className="text-dark h4" to='/'><i className="fa fa-times" aria-hidden="true"></i></NavLink> :
               <NavLink className="text-dark h4" to={{
                 pathname: '/login',
                 state: {name: 'login'}
               }}><i className="fa fa-user-circle" aria-hidden="true"></i></NavLink>
             }
           </li>
          }
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavigationBar);

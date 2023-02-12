import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './components/About';
import Home from './components/Home';
import Listing from './components/Listing';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.set_user_details = this.set_user_details.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.state = {
      isAuthenticated: localStorage.getItem('accessToken'),
      user: {'firstname':'', 'lastname':'', 'email':'', 'avatar':''},
    };
  }

  componentDidMount() {
    if(this.state.isAuthenticated) {
      this.set_user_details()
    }
  }

  set_user_details() {
    axios.get('https://social-bubble-backend.onrender.com/user-details/', {
      headers: {
        'Authorization': localStorage.getItem('accessToken')
      }
    })
    .then(res => {
      let user = res.data;
      this.setState({
        user: {'firstname':user.first_name, 'lastname':user.last_name, 'email':user.email, 'avatar':user.avatar}
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  logout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    this.setState({
      isAuthenticated: localStorage.getItem('accessToken'),
      user: {'firstname':'', 'lastname':'', 'email':'', 'avatar':''}
    })
  }

  login() {
    this.setState({
      isAuthenticated: localStorage.getItem('accessToken')
    })
    this.set_user_details()
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <NavigationBar user={this.state.user} isAuthenticated={this.state.isAuthenticated} logout={this.logout}/>
          <Switch>
            <Route exact path="/" render={(props) => this.state.isAuthenticated ?
              <Home {...props}/> : <About {...props}/>
            }/>
            <Route exact path="/login" render={(props) => this.state.isAuthenticated ?
              <Redirect to="/"/> : <Register {...props} login={this.login}/>
            }/>
            <Route exact path="/listing" render={(props) => this.state.isAuthenticated ?
              <Listing {...props}/> : <Redirect to="/login"/>
            }/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

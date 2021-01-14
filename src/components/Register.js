import React from 'react';
import './Register.css'
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateSignupForm = this.validateSignupForm.bind(this)
    this.state = {
      email: '',
      password: '',
      first_name: '',
      formError: '',
      passwordError: '',
      nameError: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validateSignupForm(e) {
    let nameField = e.target.querySelectorAll(".forms_field-input")[0].value;
    let passwordField = e.target.querySelectorAll(".forms_field-input")[2].value;
    let validationSuccess = true;

    if (passwordField.length < 8) {
      this.setState({
        passwordError: "password must be atleast 8 characters long"
      })
      validationSuccess = false
    } else {
      this.setState({
        passwordError: ""
      })
    }

    if (!/^[A-Za-z]+$/.test(nameField)) {
      this.setState({
        nameError: "name must contain only alphabets"
      })
      validationSuccess = false
    } else {
      this.setState({
        nameError: ""
      })
    }

    if (validationSuccess) {
      this.setState({
        passwordError: "",
        nameError: "",
      })
      return 0;
    }

    return 1;
  }

  handleLoginSubmit(e) {
    e.preventDefault()
    axios.post(
      'https://social-bubble-backend.herokuapp.com/login/', {
        email: this.state.email,
        password: this.state.password,
        formError: ''
      }
    )
    .then(response => {
      let access_token = response.data.access;
      let refresh_token = response.data.refresh;
      localStorage.setItem("accessToken", 'Bearer ' + access_token);
      localStorage.setItem("refreshToken", refresh_token);
      this.props.login()
    })
    .catch(err => {
      this.setState({
        password: '',
        formError: err.response.data['detail']
      })
    })
  }

  handleSignupSubmit(e) {
    e.preventDefault()
    if(this.validateSignupForm(e)) {
      return;
    }
    axios.post(
      'https://social-bubble-backend.herokuapp.com/register/', {
        first_name: this.state.first_name.toLowerCase(),
        email: this.state.email.toLowerCase(),
        password: this.state.password,
        formError: ''
      }
    )
    .then(response => {
      let access_token = response.data.access;
      let refresh_token = response.data.refresh;
      localStorage.setItem("accessToken", 'Bearer ' + access_token);
      localStorage.setItem("refreshToken", refresh_token);
      this.props.login()
    })
    .catch(err => {
      this.setState({
        password: '',
        formError: err.response.data,
      })
    })
  }

  componentDidMount() {
    const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

    if(this.props.location.state['name'][0].toLowerCase() === 'l') {
      userForms.classList.add('bounceRight')
    } else {
      userForms.classList.add('bounceLeft')
    }
    /**
     * Add event listener to the "Sign Up" button
     */
    signupButton.addEventListener('click', () => {
      this.setState({
        password: '',
        formError: '',
        passwordError: '',
        nameError: ''
      })
      userForms.classList.remove('bounceRight')
      userForms.classList.add('bounceLeft')
    }, false)

    /**
     * Add event listener to the "Login" button
     */
    loginButton.addEventListener('click', () => {
      this.setState({
        password: '',
        formError: '',
        passwordError: '',
        nameError: ''
      })
      userForms.classList.remove('bounceLeft')
      userForms.classList.add('bounceRight')
    }, false)
  }
  render() {
    return (
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Don't have an account?</h2>
              <p className="user_unregistered-text">What's better than a group of friends, even bigger group of friends.</p>
              <button className="user_unregistered-signup" id="signup-button">Sign up</button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <p className="user_registered-text">Get on and Create amazing experiences. Now don't just live, experience living.</p>
              <button className="user_registered-login" id="login-button">Login</button>
            </div>
          </div>

          <div className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <div className="form-text text-muted forms_error">{this.state.formError}</div>
              <form className="forms_form" method="post" onSubmit={this.handleLoginSubmit}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type='email' name='email' placeholder='email' className="forms_field-input" required autoFocus value={this.state.email} onChange={this.handleChange}/>
                  </div>
                  <div className="forms_field">
                    <input type='password' name='password' placeholder='password' className="forms_field-input" required autoFocus value={this.state.password} onChange={this.handleChange}/>
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                  <input type="submit" value="Log In" className="forms_buttons-action"/>
                </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <div className="form-text text-muted forms_error">{this.state.formError}</div>
              <form className="forms_form" method="post" onSubmit={this.handleSignupSubmit}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type='text' name='first_name' placeholder='first name' className="forms_field-input" required autoFocus value={this.state.first_name} onChange={this.handleChange}/>
                    <div className="form-text text-muted field_error">{this.state.nameError}</div>
                  </div>
                  <div className="forms_field">
                    <input type='email' name='email' placeholder='email' className="forms_field-input" required autoFocus value={this.state.email} onChange={this.handleChange}/>
                    <div className="field_error"></div>
                  </div>
                  <div className="forms_field">
                    <input type='password' name='password' placeholder='password' className="forms_field-input" required autoFocus value={this.state.password} onChange={this.handleChange}/>
                    <div className="form-text text-muted field_error">{this.state.passwordError}</div>
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Sign up" className="forms_buttons-action"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;

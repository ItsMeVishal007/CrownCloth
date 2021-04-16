
import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" })
    console.log(event);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your Email and password</span>

        <form onSubmit={this.handleSubmit}>

          <FormInput
            type="email"
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            type="password"
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <div className='buttons'>
            <CustomButton type='Submit'>Submit</CustomButton>
            <CustomButton onClick={signInWithGoogle} IsGoogleSignIn>Sign in with Google</CustomButton>
          </div>

        </form>

      </div>
    )
  }
}


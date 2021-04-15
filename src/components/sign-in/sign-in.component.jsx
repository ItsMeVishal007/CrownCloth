import React, { Component } from 'react'

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
    this.setState({email:"" , password:""})
    console.log(event);
  }

  handleChange = event => {
    const {name , value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your Email and password</span>

        <form onSubmit={this.handleSubmit}>

          <input 
          type="email" 
          name='email' 
          value={this.state.email} 
          onChange={this.handleChange}
          />

          <label>email</label>

          <input 
          type="password" 
          name='password' 
          value={this.state.password} 
          onChange={this.handleChange}
          />

          <label>password</label>

          <input type="submit" value="Submit form" />
        </form>

      </div>
    )
  }
}

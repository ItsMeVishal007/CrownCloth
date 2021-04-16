import React from 'react'
import HomePage from './pages/homepage/HomePage.component';
import { Route } from 'react-router-dom';
import ShopComponent from './pages/shop/Shop.component';
import Header from './components/Header/Header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-sign-out.component';
import {auth , createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser:null
    };
  }

  unSubscribedFromAuth = null; 

  componentDidMount(){
    this.unSubscribedFromAuth = auth.onAuthStateChanged(async user =>{
      // this.setState({
      //   currentUser : user
      // })
      createUserProfileDocument(user);
      // console.log(user)
    })
  }

  componentWillUnmount(){
    this.unSubscribedFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopComponent} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </div>
    )
  }

}

export default App;

import React from 'react'
import HomePage from './pages/homepage/HomePage.component';
import { Route } from 'react-router-dom';
import ShopComponent from './pages/shop/Shop.component';
import Header from './components/Header/Header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-sign-out.component';
import {auth} from './firebase/firebase.utils'

class App extends React.component{
  constructor(){
    super();

    this.state = {
      currentUser:null
    };
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({
        currentUser : user
      })
      console.log(user)
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopComponent} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </div>
    )
  }

}

export default App;
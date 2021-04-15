import React from 'react'
import HomePage from './pages/homepage/HomePage.component';
import { Route } from 'react-router-dom';
import ShopComponent from './pages/shop/Shop.component';
import Header from './components/Header/Header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-sign-out.component'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopComponent} />
      <Route exact path='/signin' component={SignInAndSignUpPage} />
    </div>
  )
}

export default App;

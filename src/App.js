import React from 'react'
import HomePage from './pages/homepage/HomePage.component';
import { Route } from 'react-router-dom';
import ShopComponent from './pages/shop/Shop.component';
import Header from './components/Header/Header.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopComponent} />
    </div>
  )
}

export default App;

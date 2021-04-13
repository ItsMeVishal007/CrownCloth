import React from 'react'
import HomePage from './pages/homepage/HomePage.component';
import { Link, Route, Switch } from 'react-router-dom';

function ProductPage(props) {
  console.log(props)
  return (
    <div>
      <h2
        style={{ cursor: 'pointer' }}
        onClick={() => { props.history.push('/contactpage') }}
      >
        This is product page {props.match.params.id}
      </h2>
      <Link to='/contactpage'>Contact Page</Link>
    </div>
  )
}
function ContactPage() {
  return (
    <div>
      <h2>This is Contact page</h2>
      <Link to='/servicepage'>Service Page</Link>
    </div>
  )
}
function ServicePage(props) {
  // console.log(props)
  return (
    <div>
      <h2>This is Service page</h2>
      <Link to='/productpage/:7'>Product Page</Link>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Route exact path='/' component={HomePage} />
      <Route exact path='/contactPage' component={ContactPage} />
      <Route exact path='/servicePage' component={ServicePage} />
      <Route exact path='/productpage/:id' component={ProductPage} />
    </div>
  )
}

export default App;

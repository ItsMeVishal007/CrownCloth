import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/Logo.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss';
const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className='logo' />
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
          currentUser ?
            <div className='option' style={{cursor:'pointer'}} onClick={() => { auth.signOut() }}>Sign Out</div>
            :
            <Link className='option' to='/signin'>
              Sign in
          </Link>
        }
        <Link className='option' to='/'>CART</Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);


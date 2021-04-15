import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/Logo.svg'
import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className='logo' />
      </Link>
      <div className="options">
        <Link className='option' to='/'>SHOP</Link>
        <Link className='option' to='/'>CONTACT</Link>
        <Link className='option' to='/'>SIGN IN</Link>
        <Link className='option' to='/'>CART</Link>
      </div>
    </div>
  )
}

export default Header;

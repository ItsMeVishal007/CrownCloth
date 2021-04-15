import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/Logo.svg'
import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <Logo className='logo' />
      </Link>
      <div className="options">
        <Link className='options' to='/'>SHOP</Link>
        <Link className='options' to='/'>CONTACT</Link>
      </div>
    </div>
  )
}

export default Header;

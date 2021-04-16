import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children ,IsGoogleSignIn,  ...otherprops}) => {
  return (
    <button className={`${IsGoogleSignIn ? 'Google-Signin' : ''} custom-button`} {...otherprops}>
      {children}
    </button>
  )
}

export default CustomButton;


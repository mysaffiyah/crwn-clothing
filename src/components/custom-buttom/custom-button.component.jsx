import React from 'react';

import './custom-botton.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sin-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
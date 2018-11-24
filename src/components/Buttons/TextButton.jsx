import React from 'react';

const TextButton = (props, children) => {

    // Create Element
    if (href) {
        return(
            <a {...props} rel="noreferrer noopener">
                {children}
            </a>
        );
    }
    else {
        return (
            <button {...props}>
                {children}
            </button>
        );
    }
};

export default TextButton;

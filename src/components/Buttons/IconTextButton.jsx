import React from 'react';

const IconTextButton = (props) => {

    // Props
    const {
        children,
        className,
        disabled,
        href,
        icon,
        onClick,
        target,
    } = props;

    // Check Icon Type
    const iconSrc = () => {
        let iconType;
        // If SVG or PNG
        if (/(\.svg)$|(\.png)$/.test(icon)) {
            iconType = <img src={icon} />;
        } else {
            // If Icon Font
            iconType = <i className="material-icons">{icon}</i>;
        }
        return iconType;
    };

    // Create Element
    if (href) {
        return(
            <a href={href} className={className} onClick={onClick} target={target} rel="noreferrer noopener">
                {iconSrc()}
                {children}
            </a>
        );
    }
    else {
        return (
            <button className={className} onClick={onClick} disabled={disabled}>
                {iconSrc()}
                {children}
            </button>
        );
    }
};

export default IconTextButton;

import React from 'react';
import PropTypes from 'prop-types';

ProgressBar.propTypes = {
    mode: PropTypes.oneOf([
        'determinate',
        'indeterminate'
    ]),
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
};

ProgressBar.defaultProps = {
    mode: 'indeterminate',
    value: 0,
    min: 0,
    max: 100,
};

const progressType = (props) => {
    
    // Props
    const {
        max,
        mode,
        value,
    } = props;

    let barType;
    if (mode === 'determinate') {
        <div style={{ 'width': `${(value / max) * 100}%` }}>
            <span className="text">{(value / max) * 100}%</span>
        </div>;
    } else {
        <div>
            <span className="text">Loading...</span>
        </div>;
    }
    return barType;
};

const ProgressBar = (props) => {

    // Props
    const {
        max,
        mode,
        value,
    } = props;

    return (
        <div className="progress-bar">
            {progressType()}
        </div>
    );
};

export default ProgressBar;

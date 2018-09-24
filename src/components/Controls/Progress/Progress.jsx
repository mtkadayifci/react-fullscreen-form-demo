import React from 'react';
import PropTypes from 'prop-types';

const Progress = (props) => {
    const { total, current } = props;
    const progressPercentage = (current + 1) * (100 / total);
    return (<div className="fs-progress fs-show" style={{ width: `${progressPercentage}%` }} />);
};

Progress.propTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
};

export default Progress;

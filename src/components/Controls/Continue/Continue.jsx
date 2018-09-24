import React from 'react';
import PropTypes from 'prop-types';

const Continue = (props) => {
    const { clickHandler, show } = props;
    return (
        <button className={`fs-continue ${show ? 'fs-show' : ''}`} type="button" onClick={clickHandler}>Continue</button>
    );
};

Continue.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    show: PropTypes.bool,
};

Continue.defaultProps = {
    show: true,
};

export default Continue;

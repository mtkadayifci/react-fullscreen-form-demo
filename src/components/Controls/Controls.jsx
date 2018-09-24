import React from 'react';
import PropTypes from 'prop-types';

const Controls = (props) => {
    const { children } = props;
    return (
        <div className="fs-controls">
            {children}
        </div>
    );
};

Controls.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Controls;

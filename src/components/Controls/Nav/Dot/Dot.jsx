import React from 'react';
import PropTypes from 'prop-types';

const Dot = (props) => {
    const {
        index, isCurrent, isPrev, onClick,
    } = props;
    if (isCurrent) return <button type="button" className="fs-dot-current" />;
    return <button type="button" disabled={!isPrev} onClick={onClick.bind(null, index)} />;
};

Dot.propTypes = {
    index: PropTypes.number.isRequired,
    isCurrent: PropTypes.bool.isRequired,
    isPrev: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Dot;

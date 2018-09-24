import React from 'react';
import PropTypes from 'prop-types';

const Submit = (props) => {
    const { clickHandler, text } = props;
    return <button className="fs-submit" type="submit" onClick={clickHandler}>{text}</button>;
};

Submit.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default Submit;

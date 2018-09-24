import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = props => (
    <span className="fs-message-error fs-show">{props.message}</span>
);

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;

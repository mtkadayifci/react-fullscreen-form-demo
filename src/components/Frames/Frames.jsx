import React from 'react';
import PropTypes from 'prop-types';
import Submit from '../Submit/Submit';

const Frames = (props) => {
    const {
        children, isAnimating, animationDirection, overview, submitClickHandler, submitText,
    } = props;
    return (
        <div id="myform" className={`fs-form ${overview ? 'fs-form-overview fs-show' : 'fs-form-full'}`}>
            <ol className={`fs-fields ${isAnimating ? `fs-display-${animationDirection}` : ''}`}>
                {children}
            </ol>
            {overview ? <Submit clickHandler={submitClickHandler} text={submitText} /> : null}
        </div>
    );
};

Frames.propTypes = {
    children: PropTypes.node.isRequired,
    isAnimating: PropTypes.bool.isRequired,
    animationDirection: PropTypes.string,
    overview: PropTypes.bool.isRequired,
    submitText: PropTypes.string.isRequired,
    submitClickHandler: PropTypes.func.isRequired,
};

Frames.defaultProps = {
    animationDirection: '',
};

export default Frames;

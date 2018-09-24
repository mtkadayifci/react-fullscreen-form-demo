import React from 'react';
import PropTypes from 'prop-types';

const Nav = (props) => {
    const { children, show } = props;
    return (
        <nav className={`fs-nav-dots ${show ? 'fs-show' : ''}`}>
            {children}
        </nav>
    );
};

Nav.propTypes = {
    children: PropTypes.node.isRequired,
    show: PropTypes.bool,
};

Nav.defaultProps = {
    show: true,
};

export default Nav;

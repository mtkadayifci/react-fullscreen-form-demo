import React from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => {
    const { children, title } = props;
    return (

        <div className="fs-form-wrap" id="fs-form-wrap">
            <div className="fs-title">
                <h1>{title}</h1>
            </div>
            {children}
        </div>

    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default Layout;

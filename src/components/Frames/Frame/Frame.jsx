import React from 'react';
import PropTypes from 'prop-types';

const Frame = (props) => {
    const {
        children, classList, title, dataInfo, id,
    } = props;
    let childItems;
    if (children) {
        const getClassNames = childItem => (
            childItem.props && childItem.props.className ? `${childItem.props.className} fs-anim-lower` : 'fs-anim-lower');

        if (children.length) {
            childItems = children.map(c => React.cloneElement(c, { className: getClassNames(c) }));
        } else {
            childItems = React.cloneElement(children, { className: getClassNames(children) });
        }
    }
    return (
        <li className={classList}>
            <label className="fs-field-label fs-anim-upper" htmlFor={id} data-info={dataInfo}>
                {title}
            </label>
            {/* <input className="fs-anim-lower" id={id} name={id} type="email" placeholder="dean@road.us" required /> */}
            {childItems}
        </li>);
};

Frame.propTypes = {
    id: PropTypes.string.isRequired,
    show: PropTypes.bool,
    classList: PropTypes.string,
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    dataInfo: PropTypes.string,

};

Frame.defaultProps = {
    dataInfo: undefined,
    classList: '',
    show: true,
};

export default Frame;

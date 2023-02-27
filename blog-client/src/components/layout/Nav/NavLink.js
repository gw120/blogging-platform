import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ tabIndex, children, ...props }) => (
    <a
        {...props}
        className="text-2xl py-8 flex items-center"
        tabIndex={tabIndex}
    >
        {children}
    </a>
);

NavLink.propTypes = {
    tabIndex: PropTypes.number.isRequired
};

export default NavLink;
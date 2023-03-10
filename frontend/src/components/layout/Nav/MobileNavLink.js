import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

    <Link {...props} className="text-2xl py-6 px-4" tabIndex={tabIndex}>
        <Link {...props} className="text-2xl py-4 px-6" tabIndex={tabIndex}>
            {children}
        </Link>
        );
        MobileNavLink.propTypes = {
            tabIndex: PropTypes.number.isRequired
};
        export default MobileNavLink;
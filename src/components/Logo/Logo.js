import React from 'react';
import PropTypes from 'prop-types';

import SiteLogo from '../../assets/logo.png';
import styles from './Logo.css';

const logo = ( props ) => (
	  <div className={styles.Logo}>
        <img src = {SiteLogo} alt = "Logo" style={{width: `${props.width}px`}}/>
	  </div>
)
logo.propTypes = {
  width: PropTypes.string,
};
export default logo;
import React from 'react';

import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';

import styles from './Layout.css'

const layout = (props) => (
	<div className = {styles.Container}>
	  <header>
	    <Logo width = "150"/>
	  </header>
	  <main className = {styles.Main}>
	    {props.children}
	  </main>
	</div>
	)

layout.propTypes = { children: PropTypes.node.isRequired };

export default layout;
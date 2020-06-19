import React, { Component } from 'react';
import PropTypes from 'prop-types';

   class ErrorBoundary extends Component {
    state = { 
        hasError: false,
    };

    componentDidCatch() {
        this.setState( { hasError: true } );
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops! Something went wrong</h1>;
        } else {
            return this.props.children;
            }
        }
    } 
  ErrorBoundary.propTypes = { children: PropTypes.node.isRequired };  

  export default ErrorBoundary;  
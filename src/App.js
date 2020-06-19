import React, { Component } from 'react';
import styles from './App.css';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './components/Layout/Layout';
import BuildAComponent from './components/BuildAComponent/BuildAComponent'

class App extends Component {
  render() {
    return (
      <div className = {styles.Wrapper}>
        <Layout>
          <ErrorBoundary>
             <BuildAComponent/>
          </ErrorBoundary>
        </Layout>
      </div>
    );
  }
}

export default App;

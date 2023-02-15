import React, { useEffect } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';

const App = (props) => {
  useEffect(() => {
    console.log('QEWQEWQEWQEQ', props)
  }, [props])
  return (
    <Styled styles={styles}>
      <p>TESTING</p>
    </Styled>
  );
};

export default App;

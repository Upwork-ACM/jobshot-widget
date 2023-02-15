/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';

const App = (props) => {
  const ref = useRef()
  useEffect(() => {
    console.log('QEWQEWQEWQEQ', ref.current)
  }, [props])
  return (
    <Styled styles={styles}>
      <p>TESTING</p>
      <p>{props.componentTitle}</p>
    </Styled>
  );
};

export default App;

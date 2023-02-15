import React, { useEffect, useRef } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';

const App = (props) => {
  const ref = useRef()
  useEffect(() => {
    const component = document.querySelector('widget-component');
    console.log('component', ref.current)
    console.log(props)
  }, [props])
  return (
    <Styled styles={styles}>
      <p>TESTING</p>
    </Styled>
  );
};

export default App;

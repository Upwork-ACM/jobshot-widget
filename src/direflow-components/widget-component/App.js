import React, { useEffect } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';

const App = (props) => {
  useEffect(() => {
    const component = document.querySelector('widget-component');
    console.log('component', component)
    console.log(props)
  }, [props])
  return (
    <Styled styles={styles}>
      <p>TESTING</p>
    </Styled>
  );
};

export default App;

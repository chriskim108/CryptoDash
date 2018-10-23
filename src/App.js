import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const CustomElement =  styled.div`
  font-size: 30px; 
`

const BlueElement = styled(CustomElement)`
   color: blue;
`

class App extends Component {
  render() {
    return (
      <div>
        <CustomElement>
          Hello
        </CustomElement>

        <BlueElement> 
          World
        </BlueElement>
      </div>
    );
  }
}

export default App;

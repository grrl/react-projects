import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[0])} />
      </div>
    );
  }
}

export default App;

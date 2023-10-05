import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ColorsSelect from './ColorsSelect';
import ColorPage from './ColorPage';
import ColorForm from './ColorForm';
import './App.css';

function App() {

  const initialState = [
    {
      name: 'red',
      color: '#ff0000',
      id: uuidv4()
    }, {
      name: 'green',
      color: '#00ff00',
      id: uuidv4()
    }, {
      name: 'blue',
      color: '#0000ff',
      id: uuidv4()
    }
  ];
  
  const [colors, setColors] = useState(initialState);

  const addColor = (color) => {
    return setColors(colors => [...colors, color])
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/colors" element={<ColorsSelect colors={colors}/>}/>
        <Route path="/colors/:color" element={<ColorPage colors={colors}/>}/>
        <Route path="/colors/new" element={<ColorForm addColor={addColor} colors={colors}/>}/>
        <Route path="*" element={<ColorsSelect colors={colors}/>}/>
      </Routes>
    </div>
  );
}

export default App;
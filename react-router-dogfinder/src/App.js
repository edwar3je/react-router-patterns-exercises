import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dogs from "./Dogs";
import DogProfile from "./DogProfile";
import './App.css';

function App() {
  return (
    <Routes >
      <Route path="/dogs" element={<Dogs/>} />
      <Route path="/dogs/:dogname" element={<DogProfile/>} />
      <Route path="*" element={<Dogs />} />
    </Routes>
  );
}

export default App;

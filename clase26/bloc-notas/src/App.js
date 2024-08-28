import './App.css';
import React from 'react';
import Nota from './Nota';

export default function App() {
  return (
    <table>
      <tr>
        <Nota />
        <Nota />
        <Nota />
      </tr>
      <tr>
        <Nota />
        <Nota />
        <Nota />  
      </tr>
    </table>
  );
}

import React from 'react';
import logo from './logo.svg';
import people from './references/people';
import {Person} from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      {Object.keys(people).map(el => <Person person={people[el]}/>)}
    </div>
  );
}

export default App;
 
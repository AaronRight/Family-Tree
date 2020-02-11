import React from 'react';
import {Person} from './components'
import './App.css';

export class App extends React.Component {
  state = {
    people: {}
  };

  async componentDidMount(){
    let resp = await fetch("people.json");
    this.setState({people: await resp.json()});
  }

  render(){
   return (
      <div className="App">
        {Object.keys(this.state.people).map(el => <Person person={this.state.people[el]}/>)}
      </div>
    );
  }
}

 
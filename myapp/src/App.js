import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EBevent from './components/EBevent';
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <EBevent
          link="https://react-materialize.github.io/#/cards"
          bigTitle='HEEYYYYY'
        />
      </div>
    );
  }
}

export default App;

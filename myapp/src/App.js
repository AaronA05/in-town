import React, { Component } from 'react';
import './App.css';
import EBevent from './components/EBevent';
import SearchForm from './components/SearchForm';
import API from './utils/API';

class App extends Component {
  state = {
    results: []
  };

  componentDidMount(){
  }

  searchEB(query){
    API.search(query)
      .then(res => this.setState({ results: res.data.events }))
      .catch(err => console.log(err));
  }

  cbSearchQuery = (dataFromSeach) => {
    console.log(dataFromSeach)
  }
  
  render() {
    return (
      <div>
        <SearchForm cbFromApp={this.cbSearchQuery} />
        {this.state.results.map(resultsData => {
          return(
           <EBevent
              link={resultsData.url}
              bigTitle={resultsData.name.text}
            />
          );
        })}

      </div>
    );
  }
}

export default App;

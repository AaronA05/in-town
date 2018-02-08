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
    console.log(query);
    const limitResults = [];
    API.search(query)
      .then(res => {
        for(var i=0; i<10;i++){
          limitResults.push(res.data.events[i])
        }
        this.setState({ results: limitResults })
      }
      )
      .catch(err => console.log(err));
  }

  cbSearchQuery = (dataFromSeach) => {
    this.searchEB(dataFromSeach);
  }
  
  render() {
    return (
      <div>
        <SearchForm cbFromApp={this.cbSearchQuery} />
        {this.state.results.map((resultsData, index) => {
          return(
           <EBevent
              key={index}
              link={resultsData.url}
              mainTitle={resultsData.name.text}
              information={resultsData.start.local}
            />
          );
        })}

      </div>
    );
  }
}

export default App;

import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'Kinari',
      company: 'Microsoft'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hi {this.state.name}, I work at {this.state.company}.
          </p>
          <button onClick={()=> {
            this.setState(()=> {
              return {
                name: 'Roopa'
              };
            },
            () => {
              console.log(this.state);
            }
            )
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }

 
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: `I'm Anh Le`,
      monsters: []
    };
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // users co the doi thanh ten khac
    .then(users => this.setState({monsters:users}));  // array
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
         </p>
          <div>
            <h3>{this.state.string}</h3>
            <button onClick={() => {
              this.setState({ string: 'Hello Bi' })
            }}>
              Change text
           </button>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        {
          this.state.monsters.map(monsters =>
            (
              <div key={monsters.id}>
                <h1>{monsters.id}:</h1>
                <h2>{monsters.name}</h2>
              </div>
            )
          )
        }
      </div>
    );
  }
}

export default App;

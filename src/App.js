import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
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

/**
 * ComponentDidMount() se chay dau tien sau khi render. No se lay data tu API
 * onChange() setState cho searchField
 * FilterMonster se filter lai array monster(datatype []) theo searchField
 * 
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: `I'm Anh Le`,
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // users co the doi thanh ten khac
      .then(users => this.setState({ monsters: users }));  // array
  }

  render() {
    /**
     * const monster = this.state.monsters;
    const searchField = this.state.searchField;
     */
    // Dong nay tuong duong 2 dong tren
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(
      // Lay words trong monster ma searchField duoc go
      // Dung arrow function => {} thi phai return
      monster => {
        console.log(monster.name.toLowerCase().includes(searchField.toLowerCase()))
        // tra ve true or false
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
      }
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monster"
          onChange={
            e => {
              // setState la asynchronous function
              // dung callback de xu ly lay value thay doi lap tuc
              this.setState({ searchField: e.target.value });
              // console.log(this.state)
            }
          } />
        {/* Neu la the don thi khong co children */}
        {/* <CardList name="Anh" /> */}
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;

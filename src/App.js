import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
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
    // Neu dung function binh thuong thi phai goi dong nay, arrow function thi khong can
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      // then goi lan dau la asynronous
      .then(response => response.json())
      // users co the doi thanh ten khac
      // then lan 2 de lay gia tri synchronous
      .then(users => this.setState({ monsters: users }));  // array
  }

  // Dung arrow function de callback sau lan goi dau tien
  // Callback se duoc khoi tao moi khi App duoc render, con function thi chi render lan dau
  handleChange = (e) => {
    return this.setState({ searchField: e.target.value });
  }

  render() {
    /**
     * const monster = this.state.monsters;
    const searchField = this.state.searchField;
     */
    // Dong nay tuong duong 2 dong tren
    // JS object destructuring
    const { monsters, searchField } = this.state;
    // Tra ve 1 object ben trong monsters
    const filterMonster = monsters.filter(
      // Lay words trong monster ma searchField duoc go
      // Dung {} thi phai return, con khong thi khong can return
      monster => {
        //   // console.log(monster.name.toLowerCase().includes(searchField.toLowerCase()))
        //   // tra ve true or false (vi includes tra ve true or false)
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
      }
    );

    return (
      <div className="App">
        <h1>ANH BI</h1>
        {/* Neu goi this.handleChange() thi no se duoc goi sau khi render lan dau tien */}
        <SearchBox
          placeHolder="search monster"
          handleChange={this.handleChange} />
        {/* Neu la the don thi khong co children */}
        {/* <CardList name="Anh" /> */}
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;

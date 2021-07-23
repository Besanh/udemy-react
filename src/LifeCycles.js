import React from 'react';
import logo from './logo.svg';
import './App.css';

import ViewLifecycle from './components/lifecycle/viewlifecycle.component';

class Lifecycles extends React.Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: ''
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <button
            onClick={() =>
              this.setState(state => ({
                showChild: !state.showChild
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() =>
              this.setState(state => ({
                text: state.text + '_hello'
              }))
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <ViewLifecycle text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default Lifecycles;
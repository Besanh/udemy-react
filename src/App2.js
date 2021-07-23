import React from 'react';
import logo from './logo.svg';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meaningOfLife: 25 + this.props.increment
        };
    }

    // Neu khong khai bao trong constructor thi co the khai bao nhu vay`
    state = {meaningOfLife: 26};

    handleClick = () => {
        // setState la 1 asynchronous
        // De synchronous thi can them callback
        this.setState((prevState, prevProps) => {
            return { meaningOfLife: prevState.meaningOfLife + this.props.increment }
        }, () => { console.log(this.state.meaningOfLife) })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        {this.state.meaningOfLife}
                    </p>
                    <button onClick={this.handleClick}>Update state</button>
                </header>
            </div>
        );
    }
}

export default App2;

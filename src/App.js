import React from 'react';
import logo from './logo.svg';
import './App.css';
import sha256 from 'sha256';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {inputText: ''};
  }

  render () {
    return (
      <div className="App">
        <span className="inputPrompt">Type Something:</span> 
          <input 
            onChange={(e) => {this.handleChange(e)}} 
            ref={(input)=> this.textInput = input}
            autoComplete="off" 
            className="inputArea"
          />
        <span 
          className="output"
        >
        { this.state.output }
        </span>
      </div>
    );
  }

  componentDidMount ( props ) { 

    console.log('component mounted!')

  }

  handleChange () {

    var text = this.textInput.value,
        hash = sha256(text);

    console.log('keyUp!', text, hash)
    this.setState({
      input: text, 
      output: hash,
    });

  }

  
}

export default App;

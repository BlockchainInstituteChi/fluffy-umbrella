import React from 'react';
import logo from './logo.svg';
import './App.css';
import sha256 from 'sha256';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: 'Click Here',
      output: 'Your output will appear here.'
    };
  }

  render () {
    return (
      <div className="App">
        <span className="inputPrompt">Type Something:</span> 
          <input 
            onChange={(e) => {this.handleChange(e)}} 
            ref={(input)=> this.textInput = input}
            value={this.state.input}
            autoComplete="off" 
            className="inputArea"
            onClick={() => {this.clearInput()}}
          />
        <span 
          className="output"
        >
        { this.state.output }
        </span>
      </div>
    );
  }

  clearInput () {
    this.setState({
      input: "", 
      output: "Start typing...",
    });  
  }

  componentDidMount ( props ) { 
    this.textInput.focus();
    console.log('component mounted!')

  }

  handleChange () {

    var text = this.textInput.value,
        output = sha256(text);

    this.setState({
      input: text, 
      output: output,
    });

  }

  
}

export default App;

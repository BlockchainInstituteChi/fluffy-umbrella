import React from 'react';
import logo from './logo.svg';
import './App.css';
import sha256 from 'sha256';
import { validateMnemonic, mnemonicToSeedSync, generateMnemonic, mnemonicToEntropy } from 'bip39';
import qs from 'query-string';

const bip39 = { validateMnemonic, mnemonicToSeedSync, generateMnemonic, mnemonicToEntropy };

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

    setExampleMode(this);

    function setExampleMode (_this) {

      var mode = qs.parse(window.location.search, { ignoreQueryPrefix: true }).mode;
      console.log('mode', mode)
      if ( typeof(mode) === 'undefined' ) {
        _this.setState({ mode: 'sha256' }) 
      } else if ( mode === "bip39" ) {
        _this.setState({ mode: 'bip39' })
      } else {
        _this.setState({ mode: 'sha256' }) 
      }

    }

  }

  handleChange () {

    var text = this.textInput.value;

    if (this.state.mode === 'bip39') {
      var output = bip39.generateMnemonic();
    } else {
      var output = sha256(text);
    }

    this.setState({
      input: text, 
      output: output,
    });

  }

  
}

export default App;

import React, {Component} from 'react';
import Header from './components/Header/index';
import './App.css';
import GeneratedText from './components/GeneratedText/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3
    };
  }

  onCountChange(operator) {
    if (operator === 'minus' && this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      });
    } else if (operator === 'plus' && this.state.count < 99) {
      this.setState({
        count: this.state.count + 1
      });
    }
  }

  render() {
    return (<div className="Hipsum_container">
      <Header onCountChange={(operator) => this.onCountChange(operator)} count={this.state.count}/>
      <GeneratedText count={this.state.count}/>
    </div>);
  }
}

export default App;

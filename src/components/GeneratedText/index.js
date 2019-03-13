//the array of paragraphs or the api calling data in will go here
import React, { Component } from 'react';
import _ from 'lodash';
import  './GeneratedText.css';

class GeneratedText extends Component {
  constructor(props) {
    super (props);
    const GeneratedText= [
      'hello',
      'hello again'

    ];
    this.state = {paragraphs: GeneratedText};

  }



generateGraphs() {

    this.state.paragraphs = _.shuffle(this.state.paragraphs);
    const paragraphs = [];

    for(let i = 0; i < this.props.count; i++) {
      paragraphs.push(<div key={i} className="GeneratedText__paragraph">{this.state.paragraphs[i]}</div>)
    }

    return (
      <div>
        {paragraphs}
      </div>
    );
  }

  render() {
    return (
      <div className="GeneratedText__container col-lg-6">
        <h2 className="GeneratedText__heading">

        </h2>
        <div className="GeneratedText__paragraphs-container">
          {this.generateGraphs()}
        </div>
      </div>
    );
  }
}

export default GeneratedText;

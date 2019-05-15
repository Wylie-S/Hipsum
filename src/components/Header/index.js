import React from 'react';
import './Header.css';
import Form from '../Form/index';


const Header = props => {
  return (<div className="Header">

    <Form onCountChange={operator => props.onCountChange(operator)} count={props.count}/>
  </div>);
};

export default Header;

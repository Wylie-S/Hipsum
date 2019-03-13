

import React from 'react';
import './Header.css';
import Form from '../Form/index';
import Footer from '../Footer/index';


const Header = props => {
  return (

    <div className="Header__container col-lg-6 col-sm-12">
    <h1 className="Header__heading--primary">Hipsum</h1>
          <div className="Header__main-body">
    <hr />


          <Form onCountChange={operator => props.onCountChange(operator)} count={props.count} />
        </div>
        <Footer />
      </div>
    );
  };

  export default Header;

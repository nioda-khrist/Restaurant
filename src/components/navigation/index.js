import React from 'react';
import Header from './header';
import Footer from './footer';

const Navigation = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Navigation;

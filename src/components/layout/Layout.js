import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
const layout = props => (
  <>
    <Header />
     <Main>{props.children}</Main>
     <Footer/>
  </>
)

export default layout;
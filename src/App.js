import React from 'react';

import GlobalStyle from './styles/global'

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Pages/Home'

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;

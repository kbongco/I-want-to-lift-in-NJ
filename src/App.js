import './App.css';
import Header from '../src/Components/Header/Header.jsx'
import Footer from '../src/Components/Footer/Footer.jsx'
import About from '../src/Screens/About/About.jsx'
import Map from '../src/Components/Map/Map.jsx'
import Contact from '../src/Screens/ContactForm/Contact.jsx'
import { Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {


  return (
    <>
      <Header />
      {/* <h1>Oh no</h1> */}
      <Route path exact='/'>
        <Map
          location={location}/>
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact/>
      </Route>
    <Footer />
    </>
  );
}

export default App;

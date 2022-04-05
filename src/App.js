import './App.css';
import React, { Component } from 'react'
import PersistentDrawerRight from './Components/PersistentDrawerRight';
import {Routes, Route} from 'react-router-dom'
import Technology from './Technology';
import Sports from './Sports';

import Mynews from './Mynews';
import Footer from './Footer';

export class App extends Component {
  render() {
    
    return (
     <>
       <PersistentDrawerRight />
       <Routes>
         <Route exact path='/' element={<Mynews/>} />
         <Route exact path='/technology' element={<Technology/>} />
         <Route exact path='/sports' element={<Sports/>} />
         
       </Routes>
       <Footer />
     </>
    )
  }
}

export default App
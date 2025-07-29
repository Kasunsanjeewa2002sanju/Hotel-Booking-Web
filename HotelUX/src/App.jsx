import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import About from './Components/Pages/About';
import Index from '../src/Components/Pages/Index';
import Services from './Components/Pages/Services';
import Rooms from './Components/Pages/Rooms';
import RoomsDetails from './Components/Pages/RoomsDetails';
import Checkout from './Components/Pages/Checkout';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/Contact';


function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/rooms' element={<Rooms />}></Route>
          <Route path='/rooms/:id' element={<RoomsDetails />}></Route>
          <Route path='/checkout/:id' element={<Checkout />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

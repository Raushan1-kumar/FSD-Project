import React from 'react';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import FormHandling from './Components/FormHandling';
import ApiContectivity from './Components/ApiContectivity';
import LCMethod from './Components/LCMethod';
import UseZustand from './Components/UseZustand';

function App() {
  return (
   <>
    <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/faq" element={<Faq/>}></Route>
       <Route path="/form" element={<FormHandling/>}></Route>
       <Route path="/api" element={<ApiContectivity/>}></Route>
       <Route path='/lcmethod' element={<LCMethod a={3} favColor={"black"}/>}></Route>
       <Route path="/zustand" element={<UseZustand/>}></Route>
     </Routes>
     <Footer/>
    </BrowserRouter>
   </>
  );
}
export default App;
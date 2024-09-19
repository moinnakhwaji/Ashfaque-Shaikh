import React from 'react'
import {Routes,BrowserRouter,Router,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './component/Navbar'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/services' element = {<Services/>}/>
        
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Adjust theme as needed
      />
      
    </BrowserRouter>
  )
}

export default App

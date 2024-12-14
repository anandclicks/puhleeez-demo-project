import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SpecificProduct from './pages/SpecificProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.css" integrity="sha512-6p+GTq7fjTHD/sdFPWHaFoALKeWOU9f9MPBoPnvJEWBkGS4PKVVbCpMps6IXnTiXghFbxlgDE8QRHc3MU91lJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
   <Navbar/>
   <Routes>
    <Route path='/' element={<><Home/></>}/>
    <Route path='/prodcut/:id' element={<><SpecificProduct/></>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App

// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={AboutUs}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

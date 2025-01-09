// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import DefaultLayout from './pages/DefaultLayout'
import Blog from './pages/post'
import PostPage from './pages/PostPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/contact' Component={Contact} />
          <Route path='/posts'>
            <Route index Component={Blog}></Route>
            <Route path=':id' Component={PostPage}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

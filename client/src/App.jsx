import { useState } from 'react'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home.jsx';

function App() {

  return (
    <BrowserRouter>
      <>
      
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App

import React from 'react'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
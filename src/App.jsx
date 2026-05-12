import React from 'react'
import Home from './Home'
import Navbar1 from './Navbar1'
import About from './About'
import {BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar1/>
      
      <Router> 
        

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
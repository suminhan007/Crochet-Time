import './App.css'
import { Routes,Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Course from './pages/Course'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
      </Routes>
    </>
  )
}

export default App

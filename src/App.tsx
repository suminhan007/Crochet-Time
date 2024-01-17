import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Course from './pages/Course'
import Tool from './pages/Tool'
import ToolColorPicker from './pages/Tool/ToolColorPicker'
import PixelDrawer from './pages/Tool/PixelDrawer'
import ColorFill from './pages/Tool/ColorFill'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/tool' element={<Tool />} />
        <Route path='/color-picker' element={<ToolColorPicker />} />
        <Route path='/pixel-drawer' element={<PixelDrawer />} />
        <Route path='/color-fill' element={<ColorFill />} />
      </Routes>
    </>
  )
}

export default App

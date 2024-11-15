import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Signup from './pages/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/blog/:id' element={<Blog/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Page/Main'
import Register from './Page/Register/Register'
import Home from './Page/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

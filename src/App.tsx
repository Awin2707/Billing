import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Page/Main'
import Register from './Page/Register/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

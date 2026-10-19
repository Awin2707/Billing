import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Page/Main'
import Register from './Page/Register/Register'
import Home from './Page/Home/Home'
import Invoice from './Page/Invoice/Invoice'
import InvoiceModal from './Page/Modal/InvoiceModal'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/invoice' element={<Invoice/>} />
          <Route path='/create-invoice' element={<InvoiceModal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes> 
    </>
  )
}

export default App

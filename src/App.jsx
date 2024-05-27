import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

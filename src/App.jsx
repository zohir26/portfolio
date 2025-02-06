import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Layout/Header,Footer/Navbar'
import Hero from './Layout/Header,Footer/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Navbar></Navbar>
      <Hero></Hero>
    </>
  )
}

export default App

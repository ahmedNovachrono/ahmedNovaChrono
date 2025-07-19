import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Bio from './Components/Bio_Section/Bio'
import Cards from './Components/Cards'
import Games from './Components/Games'

function App() {

  return (
    <>
    <Hero />
    <Bio />
    <Cards />
    <Games />
    </>
  )
}

export default App

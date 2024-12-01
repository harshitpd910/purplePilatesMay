import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Content from './components/content'
import Studio from './components/studio'
import Note from './components/note'
import Contact from './components/contact'
import Pricing from './components/pricing'
import Footer from './components/footer'
import { FaWhatsapp } from "react-icons/fa";
import Footerfull from './components/footerfull'
import ContactForm from './components/contactform'

function App() {

  return (
    <>
  <a
      href="https://wa.me/919620053702"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-10 bg-green-500 p-3 rounded-full  hover:bg-green-600"
    >
      <FaWhatsapp className="text-white text-3xl color" />
    </a>
  <Navbar/>
  <Hero/>
  <Content/>
  <Studio/>
  {/* <Pricing/> */}
  <Note/>
  <Contact/>
  <Footerfull/>
    </>
  )
}

export default App

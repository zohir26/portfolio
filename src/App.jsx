
import './App.css'
import Navbar from './Layout/Header,Footer/Navbar'
import Hero from './Layout/Header,Footer/Hero'
import About from './Layout/About'
import Skills from './Layout/Skills'
import Experience from './Layout/Experience'
import Education from './Layout/Education'
import Projects from './Layout/Projects'
import Contact from './Layout/Contact'
function App() {
 

  return (
    <>
     <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] w-auto ">
     <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
     </div>
    </>
  )
}

export default App

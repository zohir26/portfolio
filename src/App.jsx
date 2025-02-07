
import './App.css'
import Navbar from './Layout/Header,Footer/Navbar'
import Hero from './Layout/Header,Footer/Hero'
import About from './Layout/About'
import Skills from './Layout/Skills'
import Experience from './Layout/Experience'
import Education from './Layout/Education'
import Projects from './Layout/Projects'
import Contact from './Layout/Contact'
import Footer from './Layout/Header,Footer/Footer'
function App() {
 

  return (
    <>
     <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] w-auto ">
     <Navbar></Navbar>
      <Hero></Hero>
     <div id='about'>
     <About></About>
     </div>
      <div id='skills'>
      <Skills></Skills>
      </div>
      <div id='experience'>
      <Experience></Experience>
      </div>
     <div id='education'>
     <Education></Education>
     </div>
      <div id= 'projects'>
      <Projects></Projects>
      </div>
      <div id='contact'>
      <Contact></Contact>
      </div>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App

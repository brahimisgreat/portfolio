import './App.css'
import { Header } from './Components/Header'
import { Intro } from './Components/Pages/Intro'
import { Routes, Route } from 'react-router-dom'
import { Skills } from './Components/Pages/Skills'
import rings from './assets/images/pattern-rings.svg'
import Projects from './Components/Pages/Projects'
import Contact from './Components/Pages/Contact'

function App() {

  return (
    <div className="app flex flex-col items-center gap-3 ">
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
      </Routes>
      <Skills />
      <img className='app-rings' src={rings} />
      <Projects />
      <Contact />
    </div>
     
  )
}

export default App

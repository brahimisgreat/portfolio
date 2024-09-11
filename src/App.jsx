import './App.css'
import { Header } from './Components/Header'
import { Intro } from './Components/Pages/Intro'
import { Routes, Route } from 'react-router-dom'
import { Skills } from './Components/Pages/Skills'

function App() {

  return (
    <div className="app flex flex-col items-center gap-16 ">
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
      </Routes>
      <Skills />
    </div>
     
  )
}

export default App

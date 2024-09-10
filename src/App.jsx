import './App.css'
import { Header } from './Components/Header'
import { Intro } from './Components/Pages/Intro'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
      </Routes>
    </div>
     
  )
}

export default App

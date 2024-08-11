import './App.css'
import { Header } from './Components/Header/Header'
import { Projects } from './Components/Project/Projects'
import { Skills } from './Components/Skills/Skills'

function App() {

  return (
    <div className="app">
      <Header />
      <Skills />
      <Projects />
    </div>
     
  )
}

export default App

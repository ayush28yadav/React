import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import LearnPage from './pages/LearnPage'
import TestPage from './pages/TestPage'
import Fetching from './pages/Fetching'
import ToDoPage from './pages/ToDoPage'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path ="/fetching" element={<Fetching/>}/>
          <Route path="/todo" element={<ToDoPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

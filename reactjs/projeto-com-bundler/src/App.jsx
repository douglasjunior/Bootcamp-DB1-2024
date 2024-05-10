// import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className='app-component'>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tasks">Tarefas</Link></li>
          <li><Link to="/about">Sobre</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Hero from './pages/Hero';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='app-component'>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tasks">Tarefas</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/hero/strange">Dr Estranho</Link></li>
          <li><Link to="/hero/iron-man">Homem de Ferro</Link></li>
          <li><Link to="/hero/spider-man">Homem Aranha</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/hero/:heroId" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

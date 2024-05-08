import { useState } from 'react'
import './App.css'

import Clock from './components/Clock'
import Step from './components/Step'

function App() {
  const [showStep, setShowStep] = useState(true);
  const handleShowHideStep = () => {
    setShowStep(!showStep);
  }
  return (
    <div>
      <Clock startDate={new Date(2001, 9, 15, 20, 30, 0)} />

      <br />

      {showStep ? <Step /> : null}

      <button onClick={handleShowHideStep}>
        Exibir/Ocultar step
      </button>
    </div>
  )
}

export default App

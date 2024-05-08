import { useState } from 'react'
// import './App.css'

import { Button, Calendar, DatePicker } from 'antd';

import Clock from './components/Clock'
import Step from './components/Step'
import Tasks from './components/Tasks';

function App() {
  const [showStep, setShowStep] = useState(true);
  const handleShowHideStep = () => {
    setShowStep(!showStep);
  }
  return (
    <div>
      <Tasks />

      <br />
      <br />

      <Clock startDate={new Date(2001, 9, 15, 20, 30, 0)} />

      <br />

      {showStep ? <Step /> : null}

      <Button onClick={handleShowHideStep}>
        Exibir/Ocultar step
      </Button>
      <Button type='primary' onClick={handleShowHideStep}>
        Exibir/Ocultar step
      </Button>
      <Button type='primary' danger onClick={handleShowHideStep}>
        Exibir/Ocultar step
      </Button>
      <Button type='primary' disabled={true} onClick={handleShowHideStep}>
        Exibir/Ocultar step
      </Button>
      <Button type='primary' loading onClick={handleShowHideStep}>
        Exibir/Ocultar step
      </Button>
      <Button type='text' onClick={handleShowHideStep}>
        Exibir/Ocultar step
      </Button>
      <Button type='link' onClick={handleShowHideStep}>
        Exibir/Ocultar step
      </Button>

      <br />
      <br />

      <Calendar fullscreen={false} />

      <br />
      <br />

      <DatePicker />
    </div>
  )
}

export default App

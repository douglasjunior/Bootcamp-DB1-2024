import './App.css'
import Clock from './components/Clock'

function App() {

  return (
    <div>
      <Clock startDate={new Date(2001, 9, 15, 20, 30, 0)} />
    </div>
  )
}

export default App

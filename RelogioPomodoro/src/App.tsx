import './App.css'
import { PomodoroTimer } from './components/PomodoroTimer'

function App() {
  return (
    <>
      <PomodoroTimer
        defaultPomodoroTime={25}
      />
    </>
  )
}

export default App

import Header from './components/Header.jsx'
import FocusTimer from './components/FocusTimer.jsx'
import SessionList from './components/SessionList.jsx'
import { useEffect, useState } from 'react'
import ThemeContext from './ThemeContext.js'
import './App.css'
function App() {
  console.log('render: App')
  const [theme, setTheme] = useState("light");
  const [sessions, setSessions] = useState([])

  function handleSaveSession(newSession) {
    setSessions(prev => [...prev, newSession])
  }
  useEffect(() => {
    document.title = `Focus Timer (${sessions.length})`
  }
    , [sessions.length])
  return (
    <ThemeContext.Provider value={[ theme, setTheme ]}>
      <div className={theme}>
        <Header />
        <FocusTimer handleSaveSession={handleSaveSession} />
        <SessionList sessions={sessions} />
      </div>
    </ThemeContext.Provider>
  )
}
export default App

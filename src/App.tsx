
import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage'
import Sidebar from './component/Sidebar'
import { HistoryProvider } from './context/HistoryContext'
import Search from './component/Search'

function App() {
  const [question, setQuestion] = useState('')
  const [newchat, setNewchat] = useState(false)
  return (
    <HistoryProvider>
      <div className="w-full flex">
        <Search />
        <Sidebar setNewchat={setNewchat} setQuestion={setQuestion} />
        <Homepage setNewchat={setNewchat} newchat={newchat} question={question} />
      </div>
    </HistoryProvider>
  )
}

export default App

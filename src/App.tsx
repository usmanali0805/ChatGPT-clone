
import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage'
import Sidebar from './component/Sidebar'
import { HistoryProvider } from './context/HistoryContext'
import Search from './component/Search'

function App() {
  const [question, setQuestion] = useState<string>('')
  const [newchat, setNewchat] = useState<boolean>(false)
  const [srchbtn, setSrchbtn] = useState<boolean>(false)
  const [margin, setMargin] = useState<string>("ml-[18vw]")
  return (
    <HistoryProvider>
      <div className="w-full flex">
        {srchbtn?<Search setSrchbtn={setSrchbtn} setQuestion={setQuestion}/>:""}
        <Sidebar setMargin={setMargin} setSrchbtn={setSrchbtn} setNewchat={setNewchat} setQuestion={setQuestion} />
        <Homepage margin={margin} setNewchat={setNewchat} newchat={newchat} question={question} />
      </div>
    </HistoryProvider>
  )
}

export default App


import { useState} from 'react'
import './App.css'
import Homepage from './Pages/Homepage'
import Sidebar from './component/Sidebar'
import {HistoryProvider} from './context/HistoryContext'

function App() {
  const [question, setQuestion] = useState('')
  console.log(question)
  return (
    <HistoryProvider>
    <div className = "w-full flex">
      <Sidebar setQuestion = {setQuestion}/>
      <Homepage question= {question}/>
    </div>
    </HistoryProvider>
  )
}

export default App

import './App.css'
import Homepage from './Pages/Homepage'
import Sidebar from './component/Sidebar'
import {HistoryProvider} from './context/HistoryContext'

function App() {

  return (
    <HistoryProvider>
    <div className = "w-full flex">
      <Sidebar/>
      <Homepage/>
    </div>
    </HistoryProvider>
  )
}

export default App

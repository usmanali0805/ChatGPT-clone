import './App.css'
import Homepage from './Pages/Homepage'
import Sidebar from './component/Sidebar'

function App() {

  return (
    <div className = "w-full flex">
      <Sidebar/>
      <Homepage/>
    </div>
  )
}

export default App

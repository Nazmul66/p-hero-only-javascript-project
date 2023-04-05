
import { Outlet } from 'react-router-dom'
import './App.css'
import Headers from './Component/Headers/Headers'
// import Dashboard from './Dashboard/Dashboard'

function App() {

  return (
    <div className="App">
       <Headers></Headers>
       {/* <Dashboard></Dashboard> */}
       <Outlet></Outlet>
    </div>
  )
}

export default App

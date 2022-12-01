import CreateEmployee from './pages/CreateEmployee'
import EmployeesList from './pages/EmployeeList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/EmployeesList" element={<EmployeesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

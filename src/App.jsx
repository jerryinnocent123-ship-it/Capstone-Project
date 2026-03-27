import { BrowserRouter, Routes, Route } from "react-router-dom"



import Dashboard from "./pages/Dashboard"
import AddEmploye from "./pages/AddEmploye"
import EmployesList from "./pages/EmployesList"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/add" element={<AddEmploye/>} />
      <Route path="/list" element={<EmployesList/>} />

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App

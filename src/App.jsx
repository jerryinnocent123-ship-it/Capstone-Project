import {BrowserRouter, Routes, Route} from "react-router-dom";


import Dashboard from "./pages/Dashboard"
import EmployesList from "./pages/EmployesList"
import AddEmploye from "./pages/AddEmploye"


function App() {
  

  return (
  
     <BrowserRouter>
     <Routes>

      <Route path={"/"} element={<Dashboard/>} />
      <Route path={"/add"} element={<AddEmploye/>} />
      <Route path={"/list"} element={<EmployesList/>} />
     </Routes>
     
     </BrowserRouter>
 
  )
}

export default App

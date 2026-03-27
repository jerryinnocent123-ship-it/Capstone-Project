import Header from "../components/Header"
import SideBar from "../layouts/SideBar"
import EmployeeForm from "../components/EmployeeForm"

export default function AddEmploye() {
    return (
        <>
            <Header title={"Add an Employe"}/>
            <SideBar />
           <div className="form-section"> <EmployeeForm/>  </div> 
        </>
    )
}
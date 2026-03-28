import Header from "../components/Header"
import SideBar from "../layouts/SideBar"
import EmployeeList from "../components/EmployeeList"
import { empl } from "../data/empl"

export default function EmployesList(){
    return(
        <>
       <Header title={"Employes List"} />
       <SideBar />

       <div className="empl-list">

        <div className="list-item">
            <EmployeeList profil={empl} />
        </div>

       </div>
        </>
    )
}
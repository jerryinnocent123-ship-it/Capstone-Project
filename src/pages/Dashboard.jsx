import Header from "../components/Header"
import SideBar from "../layouts/SideBar"
import { empl } from "../data/empl"
import EmployeeList from "../components/EmployeeList"


export default function () {
    return (
        <>
            <Header title={"Employes Dashboard"} />
            <SideBar />
            <div className="containers">

                <div className="content">
                    <EmployeeList profil={empl} />
                </div>

                
                <div className="content">
                    {/* kote form nan ap ye */}
                </div>

                

            </div>
        </>
    )
}
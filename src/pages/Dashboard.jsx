import Header from "../components/Header"
import SideBar from "../layouts/SideBar"
import { empl } from "../data/empl"
import EmployeeList from "../components/EmployeeList"


export default function(){
    return(
        <>
        <Header title={"Employes Dashboard"}/>
        <SideBar/>
        <div>
        <EmployeeList profil= {empl}/>
        </div>
        </>
    )
}
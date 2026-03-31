import "./styles/employeList.css"
import EmployeeCard from "./EmployeeCard";


export default function EmployeeList({profil}){

    return(
        <>
        <div className="list-containers">
            <div className="list-items">
                {profil.map( (list)=>(
                    <EmployeeCard key={list.id}
                    name={list.name}
                    position={list.position}
                    department={list.department}
                    actif={list.actif}
                    />
                ))}
            </div>
        </div>
        
        </>
    )
}
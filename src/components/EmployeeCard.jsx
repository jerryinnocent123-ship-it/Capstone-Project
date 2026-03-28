// Chaque profil affiche : nom, poste,
//  département et statut (actif / inactif)
import "./styles/employeeCard.css";


export default function EmployeeCard({ name, position, department, actif }) {


    return (
        <>
            {/* Lap Affiche information sou yn moun */}

            <div className="profil-containers">
                <div className="profil">

                    <div className="name">
                        <h2>Name : {name} </h2>
                        <span className={actif}>
                            {actif === true ? "Actif" : "Inactif"}
                        </span>
                    </div>

                    <p className={position}>Post: {position} </p>
                    <p className={department}>Departement:  {department} </p>
                </div>
            </div>
        </>
    )
}

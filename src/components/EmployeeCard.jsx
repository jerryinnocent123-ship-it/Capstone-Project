import "./styles/employeeCard.css";

export default function EmployeeCard({ name, position, department, actif }) {
  return (
    <div className="profil-containers">
      <div className="profil">
        <div className="name">
          <h2>Name : {name}</h2>
          <span className={actif ? "true" : "false"}>
            {actif === true ? "Actif" : "Inactif"}
          </span>
        </div>
        <p>
          <strong>Poste :</strong> {position}
        </p>
        <p>
          <strong>Département :</strong> {department}
        </p>
      </div>
    </div>
  );
}
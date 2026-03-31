// Contenir un formulaire pour ajouter un nouvel 
// employé le nouvel employé doit
// apparaître immédiatement dans la liste sans 
// rechargement de la page


// Le formulaire doit contenir les champs suivants 
// : `name`, `position`, `department`. Après
// soumission, le nouvel employé doit apparaître 
// immédiatement dans la liste et le formulaire doit
// se réinitialiser.

import { useState } from "react";
import "./styles/employeeForm.css";
import {PlusIcon} from "lucide-react";


export default function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    department: ""
  });

  const [profil, setProfil] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State pou modal la

  function handleChange(event) {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  function addEmployee() {
    // Vérifier que tous les champs sont remplis
    if (!formData.name.trim() || !formData.position.trim() || !formData.department.trim()) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    
    // Créer un nouvel employé
    const newEmployee = { 
      id: Date.now(),
      name: formData.name,
      position: formData.position,
      department: formData.department,
      actif: true,
      createdAt: new Date().toISOString()
    };
    
    // Ajouter à la liste
    setProfil((previous) => [...previous, newEmployee]);
    
    // Réinitialiser le formulaire
    setFormData({ name: "", position: "", department: "" });
    
    // Fèmen modal la apre ajoute
    setIsModalOpen(false);
    
    console.log("Employé ajouté:", newEmployee);
  }

  function deleteEmployee(id) {
    const newList = profil.filter((emp) => emp.id !== id);
    setProfil(newList);
    console.log("Employé supprimé, ID:", id);
  }

  // Fonksyon pou louvri modal la
  function openModal() {
    setIsModalOpen(true);
  }

  // Fonksyon pou fèmen modal la
  function closeModal() {
    setIsModalOpen(false);
    // Opsyonèl: reyini form nan lè w fèmen
    setFormData({ name: "", position: "", department: "" });
  }

  return (
    <div className="app-container">
      {/* Formulaire sou PC - rete a dwat */}
      <div className="form-container">
        <div className="form-card">
          <h3 className="form-title">Ajouter</h3>
          <div className="form-fields">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              onChange={handleChange}
              value={formData.name}
              className="input-field"
            />
            <input
              type="text"
              name="position"
              placeholder="Poste"
              onChange={handleChange}
              value={formData.position}
              className="input-field"
            />
            <input
              type="text"
              name="department"
              placeholder="Département"
              onChange={handleChange}
              value={formData.department}
              className="input-field"
            />
          </div>
          <button type="button" onClick={addEmployee} className="submit-btn">
            + Ajouter
          </button>
        </div>
      </div>

      {/* Bouton floating pou mobil */}
      <button className="floating-add-btn" onClick={openModal}>
        <PlusIcon size={28} />
      </button>

      {/* Modal pou form nan sou mobil */}
      <div className={`form-modal ${isModalOpen ? 'open' : ''}`}>
        <div className="modal-header">
          <h3>Ajouter un employé</h3>
          <button className="close-modal" onClick={closeModal}>✕</button>
        </div>
        <div className="form-fields">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            onChange={handleChange}
            value={formData.name}
            className="input-field"
          />
          <input
            type="text"
            name="position"
            placeholder="Poste"
            onChange={handleChange}
            value={formData.position}
            className="input-field"
          />
          <input
            type="text"
            name="department"
            placeholder="Département"
            onChange={handleChange}
            value={formData.department}
            className="input-field"
          />
        </div>
        <button type="button" onClick={addEmployee} className="submit-btn">
          + Ajouter
        </button>
      </div>

      {/* Liste des employés */}
      <div className="list-container">
        {profil.length === 0 ? (
          <p className="empty-message">Aucun employé</p>
        ) : (
          <div className="employees-grid">
            {profil.map((employee) => (
              <div key={employee.id} className="employee-card">
                <div className="card-content">
                  <div className="card-header">
                    <span className="employee-name">{employee.name}</span>
                    <span className={employee.actif ? "status-active" : "status-inactive"}>
                      {employee.actif ? "Actif" : "Inactif"}
                    </span>
                  </div>
                  <p className="employee-position">{employee.position}</p>
                  <p className="employee-department">{employee.department}</p>
                </div>
                <button 
                  onClick={() => deleteEmployee(employee.id)} 
                  className="delete-btn"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
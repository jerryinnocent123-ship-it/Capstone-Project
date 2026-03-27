// Contenir un formulaire pour ajouter un nouvel 
// employé le nouvel employé doit
// apparaître immédiatement dans la liste sans 
// rechargement de la page


// Le formulaire doit contenir les champs suivants 
// : `name`, `position`, `department`. Après
// soumission, le nouvel employé doit apparaître 
// immédiatement dans la liste et le formulaire doit
// se réinitialiser.


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

export default function EmployeeForm({ onAddEmployee }) {
  /*
  formData: objè ki pèmèt ou stoke done ki soti nan form lan
  name, position, department: se atribi ki nan input yo, yo dwe ekri menm jan ak pwopriyete objè formData pou ka idantifye vale
  ki soti nan chak input
  */
  const [formData, setFormData] = useState({ 
    name: "", 
    position: "", 
    department: "" 
  });

  /*
  jereChanjman se fonksyon ki pèmèt siveye evenman kap pase nan input yo
  paramèt event lan se atrave li menm wap jwenn vale ak ki kote vale a soti ekzakteman
  */
  const jereChanjman = (event) => {
    /*
    lè w ap update yon state kote vale avan ou toujou bezwenl ou itilize yon fonksyon pou modifye vale yo
    nou itilize destriktirasyon pou pran tout done ki te nan formData deja epi ajoute nouvo yo sou li.
    */
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  /*
  Fonksyon sa se li ki jere soumisyon form lan
  li pran yon paramèt event tou ki fè w konnen ki action ki deklanche fonksyon an
  event.preventDefault(): anpeche paj la aktyalize (Refresh)
  setFormData({ name: "", position: "", department: "" }): reyinisyalize form lan pou ou lè w fin soumet li
  */
  const jereSoumisyon = (event) => {
    event.preventDefault();
    
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
    
    console.log("Nouvel employé créé:", newEmployee);
    
    // Appeler la fonction parent pour ajouter l'employé
    if (onAddEmployee) {
      onAddEmployee(newEmployee);
    }
    
    // Réinitialiser le formulaire
    setFormData({ name: "", position: "", department: "" });
    alert("Employé ajouté avec succès!");
  };

  return (
    <div className="employee-form-container">
      <form onSubmit={jereSoumisyon} className="employee-form">
        <h2>Ajouter un nouvel employé</h2>
        
        <input
          type="text"
          placeholder="Entrez le nom de l'employé"
          name="name"
          onChange={jereChanjman}
          value={formData.name}
          className="form-input"
        />
        <br />
        
        <input
          type="text"
          placeholder="Entrez le poste"
          name="position"
          onChange={jereChanjman}
          value={formData.position}
          className="form-input"
        />
        <br />
        
        <input
          type="text"
          placeholder="Entrez le département"
          name="department"
          onChange={jereChanjman}
          value={formData.department}
          className="form-input"
        />
        <br />
        
        <button type="submit" className="submit-button">
          Ajouter l'employé
        </button>
      </form>
    </div>
  );
}
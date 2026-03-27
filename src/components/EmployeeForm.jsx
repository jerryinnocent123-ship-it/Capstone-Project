// Contenir un formulaire pour ajouter un nouvel 
// employé le nouvel employé doit
// apparaître immédiatement dans la liste sans 
// rechargement de la page


// Le formulaire doit contenir les champs suivants 
// : `name`, `position`, `department`. Après
// soumission, le nouvel employé doit apparaître 
// immédiatement dans la liste et le formulaire doit
// se réinitialiser.


import { useState } from 'react';
import './styles/EmployeeForm.css'; // Importer le CSS du dossier styles

export default function EmployeeForm({ onAddEmployee }) {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        department: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Vérifier que tous les champs sont remplis
        if (!formData.name.trim() || !formData.position.trim() || !formData.department.trim()) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        // Créer un nouvel employé avec un ID unique
        const newEmployee = {
            id: Date.now(),
            ...formData,
            createdAt: new Date().toISOString()
        };

        // Appeler la fonction pour ajouter l'employé
        onAddEmployee(newEmployee);

        // Réinitialiser le formulaire
        setFormData({
            name: '',
            position: '',
            department: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="employee-form">
            <h2 className="employee-form-title">Ajouter un nouvel employé</h2>
            
            <div className="form-group">
                <label className="form-label">
                    Nom:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Entrez le nom de l'employé"
                        className="form-input"
                        required
                    />
                </label>
            </div>

            <div className="form-group">
                <label className="form-label">
                    Poste:
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Entrez le poste"
                        className="form-input"
                        required
                    />
                </label>
            </div>

            <div className="form-group">
                <label className="form-label">
                    Département:
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Entrez le département"
                        className="form-input"
                        required
                    />
                </label>
            </div>

            <button type="submit" className="submit-button">
                Ajouter l'employé
            </button>
        </form>
    );
}




// import { Plus } from "lucide-react";
// import { Trash } from "lucide-react";
// import { CheckCircle } from "lucide-react";
// import "./styles/style.css"


// function Todo() {
//   const iconSize =16
//   const [formData, setFormData] = useState({
//     title: "",
//     desc: "",
//     isComplete: false,
//   });

//   const [taskList, setTaskList] = useState([]);

//   function handleChange(event) {
//     setFormData((previous) => ({
//       ...previous,
//       [event.target.name]: event.target.value,
//     }));
//   }
 

//   function add(task) {
//     const newTask = { ...task, id: uuidv4() };
//     setTaskList((previous) => [...previous, newTask]);
//     setFormData({ title: "", desc: "" });
//   }

//   function deleteTask(id) {
//     const newList = taskList.filter((t) => t.id !== id);
//     setTaskList(newList);
//   }


//   // function task complete
//   function complete(id) {
//       setTaskList(
//       taskList.map((task) =>
//         task.id === id ? { ...task, isComplete: true } : task
//       )
//     );

 
//   }
//   const completedTasks = taskList.filter((task) => task.isComplete);


//   // function delete tesk complete
//  function deleteTaskComplete(id) {
//   setTaskList(taskList.filter((task) => task.id !== id));
// }




//  const handleSoumission = async (event)=>{
//     event.preventDefault();

//     try{
//         const reponse = await fetch("https://formspree.io/f/mwvrrrob", {
//             method: "POST",
//             headers:{"content-type":"application/json"},
//             body: JSON.stringify(data),
//         })
//     }
//     catch(error){
//         console.log(error)
//     }
//    }
//   return (
//     <>
//     <div className="todo-container">
//     <h1 className="title">Welcome to Todo Task </h1>
//       <form>
//         <input
//           type="text"
//           name="title"
//           placeholder="Enter task"
//           onChange={handleChange}
//           value={formData.title}
//         />
//         <input
//           type="text"
//           name="desc"
//           placeholder="Enter task description"
//           onChange={handleChange}
//           value={formData.desc}
//         />


//         <button type="button" onClick={() => add(formData)}>



//           <Plus color="green" size={iconSize} /> Ajouter
//         </button>



//       </form>

//       <div>
//         <h2>To do</h2>
//         <ul>
//           {taskList.map((task, index) => (
//             <li key={index}>
//               <p>{task.title}</p>
//               <p>{task.desc}</p>

//               <button onClick={() => deleteTask(task.id)} className="delete">
//                 <Trash color="red" size={iconSize} />
//                 Delete
//               </button>
//               {/* Update button sa poul ka deklanche fonksyon konplete a */}





//                 <button onClick={() => complete(task.id)} className="complete">
//                 <CheckCircle color="green" size={iconSize} /> Complete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <hr />

//       <div>
//         <h2>Completed</h2>
//           <ul>
//           {completedTasks.map((task) => (
//             <li key={task.id}>
//               <p>{task.title}</p>
//               <p>{task.desc}</p>
//               {/* mwen ajoute btn delete la  */}
//                <button onClick={() => deleteTaskComplete(task.id)} className="delete">
//                 <Trash color="red" size={iconSize} />
//                 Delete
//               </button>
//             </li>
            
//           ))}
//         </ul>
       
//       </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm"; // 👈 Validé avec T majuscule !
import TaskDetail from "./components/TaskDetail"; // 👈 On importe la liste

function App() {
  const [tasks, setTasks] = useState([]);

  // 1. Récupération des tâches depuis ton serveur Node.js / MongoDB au démarrage
  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => console.error("Erreur de chargement des tâches :", error));
  }, []);

  // 2. Fonction pour ajouter une tâche via l'API Express
  const handleAddTask = (newTaskFromForm) => {
    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskFromForm),
    })
      .then((response) => {
        if (response.status === 201) return response.json();
        throw new Error("Échec de la création côté serveur");
      })
      .then((savedTaskFromServer) => {
        // On ajoute la nouvelle tâche reçue de MongoDB au tableau existant
        setTasks([...tasks, savedTaskFromServer]);
      })
      .catch((error) => console.error("Erreur lors de l'ajout :", error));
  };

  return (
    <div className="app-container" style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "#333", borderBottom: "2px solid #007bff", paddingBottom: "10px" }}>
        Gestionnaire TaskFlow
      </h1>
      
      {/* Formulaire d'ajout (Qui fonctionne !) */}
      <TaskForm onAddTask={handleAddTask} />
      
      <hr style={{ margin: "30px 0", opacity: 0.3 }} />
      
      {/* Affichage de la liste connectée à ta base de données Atlas */}
      <TaskDetail tasks={tasks} />
    </div>
  );
}

export default App;
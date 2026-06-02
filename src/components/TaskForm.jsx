import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("À faire");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Sécurité : évite d'envoyer une tâche vide
    if (!title.trim()) {
      alert("Veuillez entrer un titre pour la tâche.");
      return;
    }

    const newTask = {
      title: title.trim(),
      description: description.trim(),
      status: status
    };

    // Envoi au composant parent (App.jsx)
    if (typeof onAddTask === "function") {
      onAddTask(newTask);
    }

    // Réinitialisation des champs du formulaire
    setTitle("");
    setDescription("");
    setStatus("À faire");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px", margin: "20px 0" }}>
      <h2>Ajouter une tâche</h2>
      
      <div>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Titre :</label>
        <input 
          type="text" 
          placeholder="Ex: Configurer le serveur DNS..." 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Description :</label>
        <textarea 
          placeholder="Détails de la tâche..." 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", minHeight: "60px" }}
        />
      </div>

      <div>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Statut de la tâche :</label>
        {/* Liste déroulante propre pour choisir le statut */}
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc", backgroundColor: "#fff" }}
        >
          <option value="À faire">À faire</option>
          <option value="En cours">En cours</option>
          <option value="Terminé">Terminé</option>
        </select>
      </div>

      <button type="submit" style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", marginTop: "5px" }}>
        Ajouter à MongoDB Atlas
      </button>
    </form>
  );
}

export default TaskForm;
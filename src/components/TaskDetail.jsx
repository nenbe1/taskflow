import React from "react";
import TaskCard from "./TaskCard"; // Assure-toi que le T et le C sont bien des majuscules

function TaskDetail({ tasks }) {
  // Sécurité d'ingénierie : si "tasks" est en cours de chargement ou n'est pas un tableau
  if (!tasks || !Array.isArray(tasks)) {
    return <p style={{ padding: "20px", color: "#666" }}>Chargement des tâches depuis MongoDB Atlas...</p>;
  }

  return (
    <div className="task-detail-container" style={{ marginTop: "20px" }}>
      <h2 style={{ color: "#333", fontSize: "1.5em", marginBottom: "15px" }}>
        Mes tâches en cours ({tasks.length})
      </h2>
      
      {tasks.length === 0 ? (
        <p style={{ color: "#888", fontStyle: "italic", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          Aucune tâche enregistrée dans la base de données.
        </p>
      ) : (
        <div className="tasks-grid" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {tasks.map((task) => {
            // Sécurité : Si une tâche dans la base est vide ou mal formatée, on passe à la suivante sans planter
            if (!task) return null;
            
            return (
              <TaskCard 
                key={task._id || task.id || Math.random().toString()} 
                task={task} 
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TaskDetail; // 👈 Attention : Utilise exactement le même nom avec la majuscule ici !
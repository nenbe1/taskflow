import React from "react";

function TaskCard({ task }) {
  // Sécurité anti-écran blanc : si la tâche est mal reçue, on n'affiche rien au lieu de faire planter React
  if (!task) return null;

  return (
    <div 
      className="task-card" 
      style={{
        padding: "15px",
        borderRadius: "6px",
        borderLeft: "5px solid #007bff",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: "5px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0, color: "#333" }}>{task.title || "Sans titre"}</h3>
        <span style={{ padding: "3px 8px", backgroundColor: "#e2e3e5", borderRadius: "4px", fontSize: "0.85em", fontWeight: "bold" }}>
          {task.status || "À faire"}
        </span>
      </div>
      <p style={{ margin: "5px 0 0 0", color: "#666" }}>
        {task.description || "Aucune description."}
      </p>
      {task._id && (
        <small style={{ color: "#aaa", fontSize: "0.75em", alignSelf: "flex-end" }}>
          ID Cloud: {task._id}
        </small>
      )}
    </div>
  );
}

export default TaskCard;
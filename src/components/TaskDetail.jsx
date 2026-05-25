import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function TaskDetail() {
  // Extraction de l'identifiant depuis l'URL dynamique
  const { id } = useParams();

  // Lecture dans le localStorage pour récupérer la liste à jour
  const localData = localStorage.getItem('taskflow_data');
  const tasks = localData ? JSON.parse(localData) : [];

  // Recherche de la tâche correspondante (attention à convertir le type de id en Number)
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Tâche introuvable</h2>
        <Link to="/">Retourner au tableau de bord</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#007bff', textDecoration: 'none' }}>
        &larr; Retour au tableau de bord
      </Link>
      
      <div style={{ border: '1px solid #ccc', padding: '2rem', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <span style={{ float: 'right', backgroundColor: '#eee', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          ID: {task.id}
        </span>
        <h2 style={{ marginTop: 0, color: '#222' }}>{task.titre}</h2>
        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '1.5rem 0' }} />
        
        <h4>Description détaillée :</h4>
        <p style={{ lineHeight: '1.6', color: '#555', backgroundColor: '#fcfcfc', padding: '1rem', borderRadius: '4px', borderLeft: '4px solid #007bff' }}>
          {task.description}
        </p>
        
        <div style={{ marginTop: '2rem' }}>
          <strong>Statut actuel : </strong>
          <span style={{ padding: '0.3rem 0.8rem', borderRadius: '4px', color: '#fff', fontWeight: 'bold', backgroundColor: task.statut === 'A faire' ? '#ffc107' : task.statut === 'En cours' ? '#17a2b8' : '#28a745' }}>
            {task.statut}
          </span>
        </div>
      </div>
    </div>
  );
}
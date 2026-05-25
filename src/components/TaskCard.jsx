import React from 'react';
import { Link } from 'react-router-dom';

export default function TaskCard({ task }) {
  // Style dynamique selon le statut pour rendre l'interface élégante
  const getStatusColor = (status) => {
    switch (status) {
      case 'A faire': return '#ffc107';
      case 'En cours': return '#17a2b8';
      case 'Termine': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    /* Jalon 5.3: Utilisation du composant <Link> pour encapsuler la carte */
    <Link to={`/task/${task.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '6px', backgroundColor: '#f9f9f9', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{task.titre}</h4>
        <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
          {task.description.substring(0, 60)}{task.description.length > 60 ? '...' : ''}
        </p>
        <span style={{ backgroundColor: getStatusColor(task.statut), color: 'white', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
          {task.statut}
        </span>
      </div>
    </Link>
  );
}
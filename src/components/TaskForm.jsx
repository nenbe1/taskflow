import React, { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  // Pattern Composants Contrôlés : liaison des champs à des états dédiés
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [statut, setStatut] = useState('A faire');

  const handleSubmit = (e) => {
    e.preventDefault(); // Bloquer le comportement par défaut du navigateur

    // Validation minimale
    if (!titre.trim() || !description.trim()) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    // Génération du nouvel objet tâche avec identifiant unique
    const nouvelleTache = {
      id: Date.now(), // Identifiant unique
      titre: titre,
      description: description,
      statut: statut
    };

    // Remontée d'état via la fonction de rappel (callback)
    onAddTask(nouvelleTache);

    // Réinitialisation du formulaire
    setTitre('');
    setDescription('');
    setStatut('A faire');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', maxWidth: '400px' }}>
      <h3>Ajouter une tâche</h3>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Titre :</label>
        <input 
          type="text" 
          value={titre} 
          onChange={(e) => setTitre(e.target.value)} 
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description :</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', minHeight: '60px' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Statut initial :</label>
        <select 
          value={statut} 
          onChange={(e) => setStatut(e.target.value)} 
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="A faire">A faire</option>
          <option value="En cours">En cours</option>
          <option value="Termine">Termine</option>
        </select>
      </div>
      <button type="submit" style={{ padding: '0.7rem 1.5rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Créer la tâche
      </button>
    </form>
  );
}
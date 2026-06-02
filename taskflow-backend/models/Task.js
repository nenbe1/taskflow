const mongoose = require('mongoose');

// Définition du Schéma pour une Tâche
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Le titre est obligatoire"], // Obligatoire
    maxlength: [100, "Le titre ne doit pas dépasser 100 caractères"] // Max 100 caractères
  },
  description: {
    type: String,
    required: false // Optionnelle
  },
  status: {
    type: String,
    // Configuration d'ingénierie : On ajoute les accents pour correspondre parfaitement au Front-End React
    enum: ['À faire', 'En cours', 'Terminé'], 
    default: 'À faire' // Valeur par défaut avec accent
  }
}, {
  timestamps: true // Option d'ingénierie : ajoute automatiquement la date de création et de modification
});

// Compilation et exportation du modèle pour pouvoir l'utiliser ailleurs
module.exports = mongoose.model('Task', taskSchema);
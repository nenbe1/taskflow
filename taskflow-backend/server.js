// ==========================================
// 1. IMPORTATION DES MODULES ET PACKAGES
// ==========================================
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors'); // 👈 AJOUT JALON 4 : Importation du package CORS

// ==========================================
// 2. CONFIGURATIONS INITIALES
// ==========================================
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// 3. MIDDLEWARES DE SÉCURITÉ ET PARSING (Jalon 4)
// ==========================================

// Décodage du JSON : Permet à Express de lire req.body envoyé par React
app.use(express.json()); // 

// Restriction CORS (Bonus d'ingénierie +1pt)
const corsOptions = {
  origin: 'http://localhost:5173', // 👈 Autorise uniquement ton Front-End React
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); // 

// ==========================================
// 4. CONNEXION À LA BASE DE DONNÉES MONGODB
// ==========================================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.error("Erreur de connexion à MongoDB :", error));

// ==========================================
// 5. ROUTES DE L'APPLICATION
// ==========================================

// Route de test demandée au Jalon 1
app.get('/api/ping', (req, res) => {
  res.json({ message: "Serveur TaskFlow operationnel" });
}); // [cite: 19]

// Enregistrement des routes métiers (Jalon 3)
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes); // [cite: 40]

// ==========================================
// 6. DÉMARRAGE DU SERVEUR
// ==========================================
app.listen(PORT, () => {
  console.log(`Serveur en cours d'execution sur le port ${PORT}`);
});
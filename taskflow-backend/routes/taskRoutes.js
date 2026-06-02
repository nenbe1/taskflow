const express = require('express');
const router = express.Router();

// Importation des fonctions du contrôleur
const taskController = require('../controllers/taskController');

// Définition des routes RESTful et liaison avec les contrôleurs
router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTaskStatus);
router.delete('/:id', taskController.deleteTask);

// Exportation du routeur
module.exports = router;
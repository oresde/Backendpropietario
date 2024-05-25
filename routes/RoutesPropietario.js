// instanciar express
const express = require('express');
const router = express.Router();

// instanciar controller para cada uno de los metodos 
const PropietarioController = require('../controllers/PropietarioController');

// aca van las rutal del crud
router.post('/', PropietarioController.agregarPropietarios);



// ejercicio adicional 
router.get('/', PropietarioController.mostrarPropietarios);
router.get('/:id', PropietarioController.mostrarUnPropietario);
router.delete('/:id', PropietarioController.eliminarPropietarios);
router.patch('/:id', PropietarioController.modificarPropietario);


// exporta el modulo, router configurado 

module.exports = router;


//enlazar modelo con el controller 
//exportar el modelo 
const Propietario = require('../models/Propietario');

// crear un funcion agregar propietario
exports.agregarPropietarios = async (req, res) => {

    try {
        let propietarios = new Propietario(req.body)
        await propietarios.save();
        res.send(propietarios);
    } catch (error) {
        console.log(err)
        res.status(500).send('Hubo un error al agregar un Propietario')
    }
}
// segunda parte del ejercicio 

//Mostrar propietario
exports.mostrarPropietarios = async (req, res) => {
    try {
        let propietarios = await Propietario.find()
        res.json(propietarios);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un Propietario')
    }
}

// Mostrar un propietario

exports.mostrarUnPropietario = async (req, res) => {
    try {
        let propietarios = await Propietario.findById(req.params.id);

        if (!propietarios) {
            res.status(404).json({ msg: 'No se encuentra el propietario con ese ID' });
        }
        res.send(propietarios)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un propietario');
    }
}

// Funcion para eliminar proietario
exports.eliminarPropietarios = async (req, res) => {
    try {

        let propietarios = await Propietario.findById(req.params.id);
        if (!propietarios) {
            res.status(404).json({ msg: "El propietario no existe" });
            return
        }

        await Propietario.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El propietario fue eliminado" });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un propietario en la BD');
    }
}

//modificar propietario
exports.modificarPropietario = async (req, res) => {
    try {
        let propietario = await Propietario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!propietario) {
            return res.status(404).send('Propietario no encontrado');
        }
        res.json(propietario)
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar un propietario en la BD');

    }
}

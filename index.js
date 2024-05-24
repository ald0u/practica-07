const express = require("express");

const server = express();

const port = 8080;

server.use(express.json);

const koders = [];

//Registrar
const registrar = (req, res) => {
    const newKoder = req.body.koder
    if (!newKoder) {
        res.status(400)
        res.json({
            message: 'koder is required'
        })
        return;
    }
    alls.push(newKoder)
    res.json({
        message: 'koder is added',
        koders: koders
    })
}

//Listar 
const listar = (req, res) => {
    res.json({
        message: 'KodersAll',
        koders: koders
    })
}

//Eliminar por nombre
const eliminarPorNombre = (req, res) => {
    const idElminimar = req.params.id;
    const idNumero = parseInt(idElminimar);

    if (!Number(idNumero)) {
        res.status(400)
        res.json({
            message: 'invalid'
        })
        return;
    }

    if (idNumero < 0 || idNumero >= koders.length) {
        res.status(400)
        res.json({
            message: 'invalid'
        })
        return;
    }

    koders.splice(idNumero, 1)
    res.json({
        message: 'Eliminado/s'
    })
}

server.post('/koders', registrar)
server.get('/koders', listar)
server.delete('/koders/:id', eliminarPorNombre)


server.listen(port, () => {
    console.log("Server runing")
})
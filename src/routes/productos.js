const express = require('express')
const router = express.Router()

// Lista de productos 

let productos = []

// Metodo Get de HTTP para consultar 

router.get('/', (req,res) => {
    res.json(productos)
})

// Metodo Post para crear el producto 

router.post('/', (req,res) => {
    const producto = req.body 
    producto.id = productos.length + 1
    productos.push(producto) // aqui estamos enviando a la lista con push
    res.json(producto)
})

// Metodo PUT para actualizar algun producto 
 router.put ('/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const producto = productos.find(p => p.id === id)

    if(producto) {
        const nuevoProducto = req.body 
        producto.nombre= nuevoProducto.nombre 
        res.json(producto)
    }
    else {
        res.status(404).send('Producto no encontrado')
    }
 })


 //Metodo DELETE del protocolo HTTP oara eliminar 
 router.delete('/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    productos = productos.filter((p=> p.id !=id))
    res.send('Eliminado')
 })

 module.exports = router
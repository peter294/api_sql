const db =require('../db')

// Obtener los productos 
const obtenerProducto = async () => {
    const sql = 'SELECT * FROM productos'

    const [rows] = await db.query(sql)

    return rows
}

// Crear un nuevo producto 

const crearProducto = async (producto) => {
    const sql = 'INSERT INTO producto(nombre, precio) VALUES (?,?)'

    const [resultado]= db.query(
        sql,
        [producto.nombre,producto.precio]
    )

    return resultado
}

// Actualizar producto 

const actualizarProducto = async(id,producto) => {
    const sql = 'UPDATE productos SET nombre =?, precio= ?, WHERE id =?'

    const [resultado]= await db.query(sql, 
        [producto.nombre, producto.precio, id]
    )

    return resultado
}

// Eliminar Producto 

const eliminarProducto = async (id) =>{
    const sql = 'DELETE FROM productos WHERE id=?'

    const [resultado] = await db.query(sql, [id])

    return resultado 
}


module.exports = {
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tienda'
})

connection.connect((error) => {

    if(error) {

        console.log('Error conectando a la Base de Datos')
        console.log(error)

    } else {

        console.log('Conectado a la Base de Datos')

    }
})

module.exports=connection
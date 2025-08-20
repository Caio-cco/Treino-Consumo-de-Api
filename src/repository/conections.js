import mysql from 'mysql2/promise'

const conections = await mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '1234',
     database: 'vetorobj'

})

export {conections}
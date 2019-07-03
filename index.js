const express = require('express');
const cors = require('cors');
const mysql = require('mysql')


const app = express();

const SELECT_ALL_ORDERS_QUERY = 'SELECT * FROM coffeeshop1'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'coffee',

});

connection.connect(err => { 
    if(err) {
        return err;
    }
});



app.use(cors());

app.get('/', (req, res) =>{
    res.send('go to /products to see products')
});

app.get('/products/add', (req, res) => {
    const {Name, Qty} = req.query;
    const INSERT_ORDERS_QUERY = `INSERT INTO coffeeshop1(Name, Qty) VALUES('${Name}', ${Qty} )` 
    res.send('adding product');
    connection.query(INSERT_ORDERS_QUERY, (err, results) => 
    {
        if(err){
            return res.send(err)
        }
        else { 
            return res.send('successfully added order')
        }
    })
})

app.get('/products', (req, res) => {
    connection.query(SELECT_ALL_ORDERS_QUERY, (err , results) =>{
        if (err){
            return res.send(err)
        }else{ 
            return res.json({  
                data:results 
            })
        }
    })
});



app.listen(4000, () => {
    console.log("listening on port 4000")
})

